import { useState } from 'react';
import Link from 'next/link';

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from "@material-ui/data-grid";

// Styles
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../styles/globalStyles';
import { Container } from '../../styles/usersStyles';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

// Fictional Data
import { userRows } from '../../fictionalData';

export default function Users() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id: Number) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username', headerName: 'User name', width: 200,
      renderCell: (params) => {
        return (
          <div className="userList">
            <img className="userAvatar" src={params.row.avatar} alt="Foto de perfil do usuario" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: 'email', headerName: 'E-mail', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction', width: 160 },
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
        return (
          <>
            <Link href={`/user/${params.row.id}`}>
              <a>
                <button className="BtnEditUser">EDITAR</button>
              </a>
            </Link>
            <DeleteOutline className="BtnDeleteUser" onClick={() => handleDelete(params.row.id)} />
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
          <WidgetContainer>
            <Container>
              <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};