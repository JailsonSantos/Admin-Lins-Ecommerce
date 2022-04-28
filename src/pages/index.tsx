// Components
import Chart from "../components/Chart";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import FeaturedInfo from "../components/FeaturedInfo";

// Styles
import { Main, SectionContainer, WidgetContainer } from '../styles/globalStyles';

// Fictional Data
import { userData } from '../fictionalData';
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";

export default function Home() {

  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <FeaturedInfo />
          <Chart data={userData} title="Analise de Usuários" grid dataKey="active_user" />
          <WidgetContainer>
            <WidgetSmall />
            <WidgetLarge />
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  );
}