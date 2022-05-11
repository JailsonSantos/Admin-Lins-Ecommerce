import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

// Components
import Chart from "../components/Chart";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import FeaturedInfo from "../components/FeaturedInfo";

// Styles
import { Main, SectionContainer, WidgetContainer } from '../styles/globalStyles';

// Fictional Data
import { parseCookies } from "nookies";
import { userData } from '../fictionalData';
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userRequest } from "../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


interface OrdersProps {
  _id: number;
  total: number
}

interface SortProps {
  _id: number;
}

export default function Home() {

  const router = useRouter();
  const cookies = parseCookies();
  const { ADMIN } = cookies;

  const { currentUser, isFetching } = useSelector((state: RootState) => state.user);

  const [userStatus, setUserStatus] = useState<any[]>([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ], []);

  useEffect(() => {
    if (ADMIN && currentUser._id) {
      const getStatus = async () => {
        try {
          const response = await userRequest.get('/users/statistics')

          const listOrdered = response.data.sort((a: SortProps, b: SortProps) => {
            return a._id - b._id
          });

          listOrdered.map((item: OrdersProps) => { setUserStatus(prev => [...prev, { name: MONTHS[item._id - 1], 'active_user': item.total }]) });
        } catch (error: any) {
          return error.message;
        }
      }
      getStatus();
    }
  }, [MONTHS])

  useEffect(() => {
    if (!ADMIN || !currentUser._id) {
      router.push('/login');
    }
  }, [ADMIN, currentUser._id]);

  return (
    <>
      {isFetching || !ADMIN || !currentUser._id ? <h1>Loading</h1> :

        <>
          <Topbar />
          <Main>
            <Sidebar />
            <SectionContainer>
              <FeaturedInfo />
              <Chart data={userStatus} title="Analise de Usuários" grid dataKey="active_user" />
              <WidgetContainer>
                <WidgetSmall />
                <WidgetLarge />
              </WidgetContainer>
            </SectionContainer>
          </Main>
        </>
      }
    </>
  );
}