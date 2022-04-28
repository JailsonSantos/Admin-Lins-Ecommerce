// Styles
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../../styles/globalStyles';

import {
  Container,
  ProductTitleContainer,
  ProductTitle,
  ProductAddButton,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
  ProductTopInfo,
  ProductImage,
  ProductName,
  ProductInfoBottom,
  ProductInfoItem,
  ProductInfoKey,
  ProductItemValue,
  ProductBottom,
  ProductForm,
  ProductFormLeft,
  ProductLabel,
  ProductInput,
  ProductSelect,
  ProductOption,
  ProductFormRight,
  ProductUpload,
  ProductUploadImage,
  ProductUploadLabel,
  ProductUploadInput,
  ProductUploadButton
} from '../../../styles/productStyles';

//Components
import Topbar from '../../../components/Topbar';
import Sidebar from '../../../components/Sidebar';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import Link from 'next/link';

import Chart from '../../../components/Chart';
import { productData } from '../../../fictionalData';

export default function Product() {

  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <WidgetContainer>
            <Container>
              <ProductTitleContainer>
                <ProductTitle>Produto</ProductTitle>
                <Link href="/newproduct">
                  <a>
                    <ProductAddButton>Criar</ProductAddButton>
                  </a>
                </Link>
              </ProductTitleContainer>
              <ProductTop>
                <ProductTopLeft>
                  <Chart data={productData} title="Performance de Vendas" grid dataKey="sales" />
                </ProductTopLeft>
                <ProductTopRight>
                  <ProductTopInfo>
                    <ProductImage src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Producto Iphone" />
                    <ProductName>Apple Phone</ProductName>
                  </ProductTopInfo>
                  <ProductInfoBottom>
                    <ProductInfoItem>
                      <ProductInfoKey>ID:</ProductInfoKey>
                      <ProductItemValue>123</ProductItemValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                      <ProductInfoKey>Vendas:</ProductInfoKey>
                      <ProductItemValue>8123</ProductItemValue>
                    </ProductInfoItem>

                    <ProductInfoItem>
                      <ProductInfoKey>Ativo:</ProductInfoKey>
                      <ProductItemValue>Sim</ProductItemValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                      <ProductInfoKey>Em Estoque:</ProductInfoKey>
                      <ProductItemValue>Não</ProductItemValue>
                    </ProductInfoItem>
                  </ProductInfoBottom>
                </ProductTopRight>
              </ProductTop>
              <ProductBottom>
                <ProductForm>
                  <ProductFormLeft>
                    <ProductLabel>Nome do Produto</ProductLabel>
                    <ProductInput type="text" placeholder="Iphone X" />
                    <ProductLabel>Em Estoque</ProductLabel>
                    <ProductSelect name="inStock" id="inStock">
                      <ProductOption value="yes">Sim</ProductOption>
                      <ProductOption value="no">Não</ProductOption>
                    </ProductSelect>
                    <ProductLabel>Ativo</ProductLabel>
                    <ProductSelect name="active" id="active">
                      <ProductOption value="yes">Sim</ProductOption>
                      <ProductOption value="no">Não</ProductOption>
                    </ProductSelect>
                  </ProductFormLeft>
                  <ProductFormRight>
                    <ProductUpload>
                      <ProductUploadImage src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Producto Iphone" />
                      <ProductUploadLabel htmlFor="file">
                        <Publish />
                      </ProductUploadLabel>
                      <ProductUploadInput type="file" id="file" />
                    </ProductUpload>
                    <ProductUploadButton>Atualizar</ProductUploadButton>
                  </ProductFormRight>
                </ProductForm>
              </ProductBottom>
            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};