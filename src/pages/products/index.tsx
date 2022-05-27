import { useEffect, useState } from 'react';
import Link from 'next/link';

// Styles Global
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../styles/globalStyles';

// Styles Page
import {
  Container,
  ProductTitleContainer,
  ProductTitle,
  ProductAddButton,

} from '../../styles/productsStyles';

// DataGrid Users
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from "@material-ui/data-grid";

// Fictional Data
import { productRows } from '../../fictionalData';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import { RootState } from '../../redux/store';

export default function Products() {

  const dispatch = useDispatch()

  const { isFetching } = useSelector((state: RootState) => state.user);
  const products = useSelector((state: RootState) => state.product.products);

  console.log(products);

  const handleDelete = (id: Number) => {
    deleteProduct(id, dispatch)
  }

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product', headerName: 'Produto', width: 200,
      renderCell: (params) => {
        return (
          <div className="productList">
            <img className="productImage" src={params.row.img} alt="Foto do produto" />
            {params.row.title}
          </div>
        )
      },
    },
    { field: 'inStock', headerName: 'Estoque', width: 150 },
    { field: 'price', headerName: 'Preço', width: 160 },
    {
      field: 'action', headerName: 'Ação', width: 150, renderCell: (params) => {
        return (
          <>
            <Link href={`/product/${params.row._id}`}>
              <a>
                <button className="BtnEditProduct">EDITAR</button>
              </a>
            </Link>
            <DeleteOutline className="BtnDeleteProduct" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      }
    }
  ];

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <>
      {isFetching ? <h1>Loading</h1> :
        <>
          <Topbar />
          <Main>
            <Sidebar />
            <SectionContainer>
              <ProductTitleContainer>
                <ProductTitle>Produto</ProductTitle>
                <Link href="/newproduct">
                  <a>
                    <ProductAddButton>Criar</ProductAddButton>
                  </a>
                </Link>
              </ProductTitleContainer>
              <WidgetContainer>
                <Container>
                  <DataGrid
                    rows={products}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    getRowId={(row) => row._id}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </Container>
              </WidgetContainer>
            </SectionContainer>
          </Main>
        </>
      }
    </>
  )
};