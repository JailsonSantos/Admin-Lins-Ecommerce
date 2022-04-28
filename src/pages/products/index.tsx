import { useState } from 'react';
import Link from 'next/link';

// Styles Global
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../styles/globalStyles';

// Styles Page
import { Container } from '../../styles/productsStyles';

// DataGrid Users
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from "@material-ui/data-grid";

// Fictional Data
import { productRows } from '../../fictionalData';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

export default function Products() {

  const [data, setData] = useState(productRows);

  const handleDelete = (id: Number) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product', headerName: 'Produto', width: 200,
      renderCell: (params) => {
        return (
          <div className="productList">
            <img className="productImage" src={params.row.img} alt="Foto do produto" />
            {params.row.name}
          </div>
        )
      },
    },
    { field: 'stock', headerName: 'Estoque', width: 150 },
    { field: 'status', headerName: 'Situação', width: 150 },
    { field: 'price', headerName: 'Preço', width: 160 },
    {
      field: 'action', headerName: 'Ação', width: 150, renderCell: (params) => {
        return (
          <>
            <Link href={`/product/${params.row.id}`}>
              <a>
                <button className="BtnEditProduct">EDITAR</button>
              </a>
            </Link>
            <DeleteOutline className="BtnDeleteProduct" onClick={() => handleDelete(params.row.id)} />
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