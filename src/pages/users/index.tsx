import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DeleteOutline } from '@material-ui/icons';

import { DataGrid, GridColDef, ptBR } from "@material-ui/data-grid";

// Styles
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../styles/globalStyles';

import {
  Container,
  UserTitleContainer,
  UserTitle,
  UserAddButton,
} from '../../styles/usersStyles';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

// API
import { userRequest } from '../../services/api';

interface UsersProps {
  _id: string;
  username: string;
  occupation: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img: string;
}

export default function Users() {

  const [users, setUsers] = useState<UsersProps[]>([]);
  const [userDelete, setUserDelete] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get('/users');
        setUsers(response.data);
      } catch (error: any) {
        throw error.message;
      }
    }
    getUsers();
  }, [userDelete]);

  const handleDelete = async (id: string) => {

    try {
      await userRequest.delete(`/users/${id}`);
      setUserDelete(!userDelete);
    } catch (error: any) {
      throw error.message;
    }
  }

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'username', headerName: 'Nome de Usuario', width: 200,
      renderCell: (params) => {
        return (
          <div className="userList">
            <img className="userAvatar" src={params.row.img} alt="Foto de perfil do usuario" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: 'occupation', headerName: 'Profissão', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 250 },
    {
      field: 'isAdmin', headerName: 'Administrador', width: 200, renderCell: (params) => {
        return (
          <>
            <Link href={`/user/${params.row._id}`}>
              <a>
                <button className="BtnEditUser">EDITAR</button>
              </a>
            </Link>
            <DeleteOutline className="BtnDeleteUser" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      }
    }
  ];

  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <UserTitleContainer>
            <UserTitle>Usuários</UserTitle>
            <Link href="/newuser">
              <a>
                <UserAddButton>Criar</UserAddButton>
              </a>
            </Link>
          </UserTitleContainer>
          <WidgetContainer>
            <Container>
              <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
                className="grid"
              // localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
              />
            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};