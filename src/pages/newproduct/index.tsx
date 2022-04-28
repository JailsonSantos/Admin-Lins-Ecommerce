// Styles Global
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../styles/globalStyles';

// Styles Page
import {
  Container,
  NewProductTitle,
  NewProductForm,
  NewProductItem,
  NewProductLabel,
  NewProductLabelImage,
  NewProductInput,
  NewProductInputImage,
  NewProductImage,
  NewProductSelect,
  NewProductOption,
  NewProductButton,
} from '../../styles/newProductStyles';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import { Publish } from '@material-ui/icons';

export default function NewProduct() {

  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <WidgetContainer>
            <Container>

              <NewProductTitle>Novo Produto</NewProductTitle>
              <NewProductForm>

                <NewProductItem>
                  <NewProductImage src="https://i5.walmartimages.com/asr/d1eb5073-b4a4-46e9-8fa6-8fd0ce6ad5b3_1.5f2eb7a726f1bedf74ec0ddb15e28991.jpeg" alt="Producto Iphone" />
                  <NewProductLabelImage htmlFor="file">
                    <Publish /> Escolha uma Imagem
                  </NewProductLabelImage>
                  <NewProductInputImage type="file" id="file" />
                </NewProductItem>

                <NewProductItem>
                  <NewProductLabel>Nome</NewProductLabel>
                  <NewProductInput type="text" placeholder="Nome do produto" />
                </NewProductItem>

                <NewProductItem>
                  <NewProductLabel>Estoque</NewProductLabel>
                  <NewProductInput type="stock" placeholder="123" />
                </NewProductItem>

                <NewProductItem>
                  <NewProductLabel>Ativos</NewProductLabel>
                  <NewProductSelect name="ativo" id="ativo">
                    <NewProductOption value="sim">Sim</NewProductOption>
                    <NewProductOption value="nao">Não</NewProductOption>
                  </NewProductSelect>
                </NewProductItem>

                <NewProductButton>Criar</NewProductButton>

              </NewProductForm>


            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};