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
  ProductUpdatedItem,
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
import { Publish } from '@material-ui/icons';
import Link from 'next/link';

import Chart from '../../../components/Chart';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../../services/api';

// Firebase Upload Files
import app from '../../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import { updateProduct } from '../../../redux/apiCalls';
import toast from 'react-hot-toast';

interface StatisticsProps {
  _id: number;
  total: number
}

interface SortProps {
  _id: number;
}
export default function Product() {

  const router = useRouter();
  const dispatch = useDispatch();
  const productId = router.query.slug;
  const [statisticsProduct, setStatisticsProduct] = useState<any>([]);

  const product = useSelector((state: RootState) =>
    state.product.products.find((product: { _id: string | string[] | undefined; }) => product._id === productId)
  );

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File>({} as File);
  const [inputs, setInputs] = useState({ ...product });


  const handleChangeInputs = (event: { target: { name: any; value: any; }; }) => {
    if (event.target.name === 'categories' || event.target.name === 'color' || event.target.name === 'size') {

      setInputs((prev) => {
        return { ...prev, [event.target.name]: event.target.value.split(',') };
      });

    } else {
      setInputs((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    }
  };

  const handleUploadImage = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFile(fileList[0]);
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


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

              const productUpdated = { ...inputs, img: downloadURL };

              try {
                const response = await userRequest.put(`/products/${productId}`, productUpdated);
                // setUser(response.data);
                updateProduct(productId, productUpdated, dispatch);

                toast("Produto atualizado com sucesso!", {
                  style: {
                    background: '#00947e',
                    color: '#FFF',
                  }
                });

              } catch (error) {
                toast("Falha na atualização. Tente novamente", {
                  style: {
                    background: '#fe0956',
                    color: '#FFFFFF',
                  }
                });
              }
              //window.location.reload()
              //router.push('/products');
              //console.log(productUp);

            });
          }
        );
      } else {

        const productUpdated = { ...inputs };

        try {
          const response = await userRequest.put(`/products/${productId}`, productUpdated);
          // setUser(response.data);
          updateProduct(productId, productUpdated, dispatch);

          toast("Produto atualizado com sucesso!", {
            style: {
              background: '#00947e',
              color: '#FFF',
            }
          });

        } catch (error) {
          toast("Falha na atualização. Tente novamente", {
            style: {
              background: '#fe0956',
              color: '#FFFFFF',
            }
          });
        }
        //updateProduct(productId, productUp, dispatch);

        //window.location.reload();
        //router.push('/products');

        //console.log(productUp);
      }

    } catch (error) {
      toast("Falha na atualização. Tente novamente", {
        style: {
          background: '#fe0956',
          color: '#FFFFFF',
        }
      });
    } finally {
      setLoading(false);
    }
  }

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ], []);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const response = await userRequest.get("orders/income");

        const listOrdered = response.data.sort((a: SortProps, b: SortProps) => {
          return a._id - b._id
        });

        listOrdered.map((item: StatisticsProps) => {
          setStatisticsProduct((prev: any) => [...prev, { name: MONTHS[item._id - 1], "sales": item.total }])
        });

      } catch (error: any) {
        throw error.message;
      }
    }

    getStatistics();

  }, [MONTHS]);

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
                  <Chart data={statisticsProduct} title="Performance de Vendas" grid dataKey="sales" />
                </ProductTopLeft>
                <ProductTopRight>
                  <ProductTopInfo>
                    <ProductImage src={product?.img} alt={product?.description} />
                    <ProductName>{product?.title}</ProductName>
                  </ProductTopInfo>
                  <ProductInfoBottom>
                    <ProductInfoItem>
                      <ProductInfoKey>ID:</ProductInfoKey>
                      <ProductItemValue>{product?._id?.slice(0, 5)}</ProductItemValue>
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
                      <ProductItemValue>{product?.inStock}</ProductItemValue>
                    </ProductInfoItem>
                  </ProductInfoBottom>
                </ProductTopRight>
              </ProductTop>
              <ProductBottom>
                <ProductForm className="form" onSubmit={(event) => handleSubmitForm(event)}>
                  <ProductFormLeft>

                    <ProductUpdatedItem>
                      <ProductLabel>Nome</ProductLabel>
                      <ProductInput
                        type="text"
                        name="title"
                        placeholder={product?.title}
                        onChange={handleChangeInputs}
                      />
                    </ProductUpdatedItem>

                    <ProductUpdatedItem>
                      <ProductLabel>Descrição</ProductLabel>
                      <ProductInput
                        type="text"
                        name="description"
                        placeholder={product?.description}
                        onChange={handleChangeInputs}
                      />
                    </ProductUpdatedItem>

                    <ProductUpdatedItem>
                      <ProductLabel>Categoria</ProductLabel>
                      <ProductInput
                        type="text"
                        name="categories"
                        placeholder={product?.categories.toString()}
                        onChange={handleChangeInputs}
                      />
                    </ProductUpdatedItem>

                    <ProductUpdatedItem>
                      <ProductLabel>Cores</ProductLabel>
                      <ProductInput
                        name="color"
                        type="text"
                        placeholder={product?.color.toLocaleString()}
                        onChange={handleChangeInputs}
                      />
                    </ProductUpdatedItem>

                    <ProductUpdatedItem>
                      <ProductLabel>Tamanhos</ProductLabel>
                      <ProductInput
                        name="size"
                        type="text"
                        placeholder={product?.size.toString()}
                        onChange={handleChangeInputs}
                      />
                    </ProductUpdatedItem>

                    <ProductUpdatedItem>
                      <ProductLabel>Preço</ProductLabel>
                      <ProductInput
                        name="price"
                        type="number"
                        placeholder={product?.price.toString()}
                        onChange={handleChangeInputs}
                      />
                    </ProductUpdatedItem>

                    <ProductUpdatedItem>
                      <ProductLabel>Em Estoque</ProductLabel>
                      <ProductSelect
                        name="inStock"
                        value={inputs.inStock ? inputs.inStock.toString() : product?.inStock.toString()}
                        onChange={handleChangeInputs}
                      >
                        <ProductOption value="true">Sim</ProductOption>
                        <ProductOption value="false">Não</ProductOption>
                      </ProductSelect>
                    </ProductUpdatedItem>

                  </ProductFormLeft>

                  <ProductFormRight>
                    <ProductUpload>
                      <ProductUploadLabel htmlFor="file">
                        {file?.name
                          ?
                          <ProductUploadImage src={URL.createObjectURL(file)} alt={file.name} />
                          :
                          <ProductUploadImage src={product?.img} alt={product?.description} />
                        }
                        <Publish />
                      </ProductUploadLabel>
                      <ProductUploadInput
                        type="file"
                        id="file"
                        onChange={handleUploadImage}
                      />
                    </ProductUpload>

                    <ProductUploadButton type="submit">
                      {loading ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'ATUALIZAR'}
                    </ProductUploadButton>

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