import {
  Container,
  WidgetTitle,
  WidgetList,
  WidgetListItem,
  WidgetImage,
  WidgetUser,
  WidgetUsername,
  WidgetUserOffice,
  WidgetButton,
} from "./styles"

import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react";
import { userRequest } from "../../services/api";

interface UsersProps {
  _id: string;
  username: string;
  occupation: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img: string;
}

export default function WidgetSmall() {

  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get('/users?new=true');
        setUsers(response.data);
      } catch (error: any) {
        throw error.message;
      }
    }
    getUsers();
  }, []);

  return (
    <Container>
      <WidgetTitle>Novos Membros Associados</WidgetTitle>
      <WidgetList>

        {users.map(user => (
          <WidgetListItem key={user._id}>
            <WidgetImage src={user.img || "https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/66245e/66245e63995d81634fb53c2661442957_large.jpg"} alt="Homem de terno preto e gravata azul." />
            <WidgetUser>
              <WidgetUsername>{user.username}</WidgetUsername>
              <WidgetUserOffice>{user.occupation}</WidgetUserOffice>
            </WidgetUser>
            <WidgetButton>
              <Visibility />
              Mostrar
            </WidgetButton>
          </WidgetListItem>
        ))}

      </WidgetList>
    </Container>
  )
}