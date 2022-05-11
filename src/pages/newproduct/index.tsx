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
  ProductAreaItem,
  NewProductItem,
  NewProductLabel,
  NewProductInput,
  NewProductInputImage,
  NewProductImage,
  NewProductSelect,
  NewProductOption,
  NewProductButton,
  ProductUploadLabel,
} from '../../styles/newProductStyles';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import { Publish } from '@material-ui/icons';
import { useState } from 'react';

// Firebase Upload Files
import app from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/apiCalls';
import ReactLoading from 'react-loading';

// Validação de forms
import * as yup from 'yup';

export default function NewProduct() {

  const dispatch = useDispatch();

  // States
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([''])
  const [color, setColors] = useState(['']);
  const [size, setSizes] = useState(['']);
  const [price, setPrice] = useState('');
  const [file, setFile] = useState<any>({});
  const [inStock, setInStock] = useState("true");

  /* 
    const createUserFormSchema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório'),
      email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
      password: yup.string().required('Senha obrigatória').min(8, 'Senha teve ter no mínimo 8 caracteres'),
      password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
      ], 'As senhas devem ser iguais')
    });
  
   */


  const handleChangeCategories = (event: any) => {
    setCategories(event.target.value.split(','));
  }

  const handleChangeColors = (event: any) => {
    setColors(event.target.value.split(','));
  }

  const handleChangeSizes = (event: any) => {
    setSizes(event.target.value.split(','));
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Chamada a API 
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          console.log('Error while uploading: ' + error)
        },
        () => {
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = { title, description, price, img: downloadURL, categories, color, size, inStock };
            createProduct(product, dispatch);
          });
        }
      );
    }

    setLoading(false);

    alert('success');
    setTitle('');
    setDescription('');
    setColors(['']);
    setCategories(['']);
    setSizes(['']);
    setPrice('');
    setInStock('true');
    setFile({});
  }

  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <WidgetContainer>
            <Container>

              <NewProductTitle>Novo Produto</NewProductTitle>

              <NewProductForm className="form" onSubmit={(event) => handleSubmitForm(event)}>

                <NewProductItem >
                  <ProductUploadLabel htmlFor="file">
                    {file?.name
                      ?
                      <NewProductImage src={URL.createObjectURL(file)} alt={file.name} />
                      :
                      <NewProductImage src="/images/sem-imagem.png" alt="Seleciona uma imagem" />
                    }
                    <NewProductInputImage
                      type="file"
                      id="file"
                      onChange={(event) => setFile(event.target.files[0])} />
                    <Publish />
                  </ProductUploadLabel>
                </NewProductItem>

                <ProductAreaItem>

                  <NewProductItem>
                    <NewProductLabel>Nome do produto</NewProductLabel>
                    <NewProductInput
                      name="title"
                      value={title}
                      type="text"
                      placeholder="Nome do produto"
                      onChange={(e) => setTitle(e.target.value)} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Descrição</NewProductLabel>
                    <NewProductInput
                      name="description"
                      value={description}
                      type="text"
                      placeholder="Descrição do produto"
                      onChange={(e) => setDescription(e.target.value)} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Categoria</NewProductLabel>
                    <NewProductInput
                      name="categories"
                      value={categories}
                      type="text"
                      placeholder="Masculino, Feminio ou Infantil"
                      onChange={handleChangeCategories} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Cores</NewProductLabel>
                    <NewProductInput
                      name="color"
                      value={color}
                      type="text"
                      placeholder="Azul, verde, outras..."
                      onChange={handleChangeColors} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Tamanhos</NewProductLabel>
                    <NewProductInput
                      name="size"
                      value={size}
                      type="text"
                      placeholder="P, M, G e outras..."
                      onChange={handleChangeSizes} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Preço</NewProductLabel>
                    <NewProductInput
                      name="price"
                      value={price}
                      type="number"
                      placeholder="Ex: 100"
                      onChange={(e) => setPrice(e.target.value)} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Estoque</NewProductLabel>
                    <NewProductSelect
                      name="inStock"
                      value={inStock}
                      onChange={(e) => { setInStock(e.target.value) }}
                    >
                      <NewProductOption value="true">Sim</NewProductOption>
                      <NewProductOption value="false">Não</NewProductOption>
                    </NewProductSelect>
                  </NewProductItem>

                  <NewProductButton type="submit">
                    {loading ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'CADASTRAR'}
                  </NewProductButton>

                </ProductAreaItem>

              </NewProductForm>
            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};
