import { ChangeEvent, useState } from 'react';

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
import { Publish } from '@material-ui/icons';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

// Validação de forms
import * as yup from 'yup';

// Firebase Upload Files
import app from '../../firebase';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/apiCalls';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function NewProduct() {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([''])
  const [color, setColors] = useState(['']);
  const [size, setSizes] = useState(['']);

  const [categoriesFormated, setCategoriesFormated] = useState([''])
  const [colorFormated, setColorsFormated] = useState(['']);
  const [sizeFormated, setSizesFormated] = useState(['']);

  const [price, setPrice] = useState('');
  const [file, setFile] = useState<File>({} as File);
  const [inStock, setInStock] = useState("true");

  /*   function capitalizeFirst(str: string) {
      const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
  
      console.log(subst)
  
      return subst;
  
    }
   */

  const handleChangeCategories = (event: ChangeEvent<HTMLInputElement>) => {
    setCategories(event.target.value.split(',').map(e => e.trim()));
    setCategoriesFormated(event.target.value.split(','));
  }

  const handleChangeColors = (event: ChangeEvent<HTMLInputElement>) => {
    setColors(event.target.value.split(',').map(e => e.trim()));
    setColorsFormated(event.target.value.split(','));
  }

  const handleChangeSizes = (event: ChangeEvent<HTMLInputElement>) => {
    setSizes(event.target.value.split(',').map(e => e.trim()));
    setSizesFormated(event.target.value.split(','));
  }

  const handleUploadImage = function (event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (!fileList) return;
    setFile(fileList[0]);
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(await validate())) return;

    try {
      setLoading(true);

      if (file.name) {

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
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              const product = { title, description, price, img: downloadURL, categories, color, size, inStock };

              try {
                await createProduct(product, dispatch);

                toast("Produto cadastrado com sucesso!", {
                  style: {
                    background: '#00947e',
                    color: '#FFF',
                  }
                });

                setTitle('');
                setDescription('');
                setColors(['']);
                setCategories(['']);
                setSizes(['']);
                setPrice('');
                setInStock('true');
                setFile({} as File);

              } catch (error) {
                toast("Falha ao cadastrar novo produto. Tente novamente", {
                  style: {
                    background: '#fe0956',
                    color: '#FFFFFF',
                  }
                });
              }
            });
          }
        );
      } else {

        const img = "data:image/jpeg;base64,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";

        const product = { title, description, price, img, categories, color, size, inStock };

        try {
          await createProduct(product, dispatch);

          toast("Produto cadastrado com sucesso!", {
            style: {
              background: '#00947e',
              color: '#FFF',
            }
          });

          setTitle('');
          setDescription('');
          setColors(['']);
          setCategories(['']);
          setSizes(['']);
          setPrice('');
          setInStock('true');
          setFile({} as File);

        } catch (error) {
          toast("Falha. Tente novamente", {
            style: {
              background: '#fe0956',
              color: '#FFFFFF',
            }
          });
        }
      }
    } catch (error) {
      toast("Não foi Possível cadastrar novo produto. Tente novamente", {
        style: {
          background: '#fe0956',
          color: '#FFFFFF',
        }
      });
    } finally {
      setLoading(false);
    }
  }

  async function validate() {
    const schema = yup.object().shape({
      price: yup.string().required('Preço é obrigatório'),
      size: yup.array().min(2, "Pelo menos 2 tamanhos são obrigatórios"),
      color: yup.array().min(2, "Pelo menos 2 cores são obrigatórias"),
      categories: yup.array().min(2, "Pelo menos 2 categorias são obrigatórias"),
      description: yup.string().required('Descrição do produto é obrigatória'),
      title: yup.string().required('Nome do produto é obrigatório'),
    });

    try {
      await schema.validate({ title, description, categories, color, size, price });
      return true;
    } catch (error: any) {
      toast("Error: " + error.errors, {
        style: {
          background: '#fe0956',
          color: '#FFFFFF',
        }
      });
    }
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
                      onChange={handleUploadImage} />
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
                      value={categoriesFormated}
                      type="text"
                      placeholder="Masculino, Feminio ou Infantil"
                      onChange={handleChangeCategories} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Cores</NewProductLabel>
                    <NewProductInput
                      name="color"
                      value={colorFormated}
                      type="text"
                      placeholder="Cores em inglês, Ex: blue, red..."
                      onChange={handleChangeColors} />
                  </NewProductItem>

                  <NewProductItem>
                    <NewProductLabel>Tamanhos</NewProductLabel>
                    <NewProductInput
                      name="size"
                      value={sizeFormated}
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
