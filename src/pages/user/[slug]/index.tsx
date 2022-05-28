import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Styles Global
import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../../styles/globalStyles';

import {
  Container,
  UserTitleContainer,
  UserTitle,
  UserAddButton,
  UserContainer,
  UserShow,
  UserUpdate,
  UserShowTop,
  UserShowImage,
  UserShowTopTitle,
  UserShowTopName,
  UserShowTopOffice,
  UserShowBottom,
  UserShowTitle,
  UserShowInfoTitle,
  UserShowInfo,
  UserUpdateTitle,
  UserUpdateForm,
  UserUpdateLeft,
  UserUpdateItem,
  UserLabel,
  UserUpdateInput,
  UserUpdateRight,
  UserUpdateUpload,
  UserUpdateImage,
  UserUpdateLabel,
  UserInput,
  UserUploadButton
} from '../../../styles/userStyles';

//Components
import Topbar from '../../../components/Topbar';
import Sidebar from '../../../components/Sidebar';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish
} from '@material-ui/icons';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';

// Firebase
import {
  getDownloadURL,
  getStorage, ref,
  uploadBytesResumable
} from 'firebase/storage';
import app from '../../../firebase';

// API
import { userRequest } from '../../../services/api';

interface UsersProps {
  _id: string;
  username: string;
  occupation: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img: string;
}

export default function User() {

  const router = useRouter();
  const userId = router.query.slug;

  console.log(userId);

  const [user, setUser] = useState<UsersProps>({} as UsersProps);

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File>({} as File);

  const [inputs, setInputs] = useState({});

  const handleChangeInputs = (event: { target: { name: any; value: any; }; }) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleUploadImage = function (event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
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

              const userUpdated = { ...inputs, img: downloadURL };

              try {
                const response = await userRequest.put(`/users/${userId}`, userUpdated);
                setUser(response.data);

                toast("Usuário atualizado com sucesso!", {
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
            });
          }
        );
      } else {

        const userUpdated = { ...inputs };

        try {
          const response = await userRequest.put(`/users/${userId}`, userUpdated);
          setUser(response.data);

          toast("Usuário atualizado com sucesso!", {
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
        console.log(userUpdated);

        //router.push('/products');

        //console.log(productUp);
      }

    } catch (Error) {
      toast("Falha na atualização. Tente novamente", {
        style: {
          background: '#fe0956',
          color: '#FFFFFF',
        }
      });
    } finally {
      setLoading(false);
      setInputs({});
    }
  }


  useEffect(() => {

    const getUser = async () => {
      try {
        const response = await userRequest.get(`users/find/${userId}`);
        setUser(response.data);
      } catch (error: any) {
        throw error.message;
      }
    }
    getUser();
  }, [userId]);


  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <WidgetContainer>
            <Container>
              <UserTitleContainer>
                <UserTitle>Editar Usuário</UserTitle>
              </UserTitleContainer>

              <UserContainer>
                <UserShow>
                  <UserShowTop>
                    <UserShowImage src={user.img || "https://www.pol.una.py/wp-content/uploads/2021/10/main-thumb-1363241199-200-kbcrxygrufulfyqwbrbjuppihntqxcme.jpeg"} alt="Foto de perfil, com camisa azul." />
                    <UserShowTopTitle>
                      <UserShowTopName>{user.username}</UserShowTopName>
                      <UserShowTopOffice>{user.occupation}</UserShowTopOffice>
                    </UserShowTopTitle>
                  </UserShowTop>
                  <UserShowBottom>
                    <UserShowTitle>Detalhes da Conta</UserShowTitle>
                    <UserShowInfo>
                      <PermIdentity />
                      <UserShowInfoTitle>{user.username}</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                      <CalendarToday />
                      <UserShowInfoTitle>08.07.1985</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowTitle>Detalhes do Contato</UserShowTitle>

                    <UserShowInfo>
                      <PhoneAndroid />
                      <UserShowInfoTitle>(98) 98856-5096</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                      <MailOutline />
                      <UserShowInfoTitle>{user.email}</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                      <LocationSearching />
                      <UserShowInfoTitle>São Luís | MA</UserShowInfoTitle>
                    </UserShowInfo>
                  </UserShowBottom>
                </UserShow>
                <UserUpdate>
                  <UserUpdateTitle>Editar</UserUpdateTitle>

                  <UserUpdateForm className="form" onSubmit={(event) => handleSubmitForm(event)}>

                    <UserUpdateLeft>
                      <UserUpdateItem>
                        <UserLabel>Nome do Usuário</UserLabel>
                        <UserUpdateInput
                          type="text"
                          name="username"
                          placeholder={user.username}
                          onChange={handleChangeInputs}
                        />
                      </UserUpdateItem>
                      <UserUpdateItem>
                        <UserLabel>Profissão</UserLabel>
                        <UserUpdateInput
                          type="text"
                          name="occupation"
                          placeholder={user.occupation}
                          onChange={handleChangeInputs}
                        />
                      </UserUpdateItem>
                      <UserUpdateItem>
                        <UserLabel>E-mail</UserLabel>
                        <UserUpdateInput
                          type="email"
                          name="email"
                          placeholder={user.email}
                          onChange={handleChangeInputs}
                        />
                      </UserUpdateItem>
                      <UserUpdateItem>
                        <UserLabel>Telefone</UserLabel>
                        <UserUpdateInput type="text" placeholder="(00) 00000-0000" />
                      </UserUpdateItem>
                      <UserUpdateItem>
                        <UserLabel>Endereço</UserLabel>
                        <UserUpdateInput type="text" placeholder="São Luís | MA" />
                      </UserUpdateItem>
                    </UserUpdateLeft>

                    <UserUpdateRight>
                      <UserUpdateUpload>
                        <UserUpdateLabel htmlFor="file">
                          {file?.name
                            ?
                            <UserUpdateImage src={URL.createObjectURL(file)} alt={file.name} />
                            :
                            <UserUpdateImage src={user.img} alt="Foto de perfil do usuário." />
                          }

                          <Publish />
                        </UserUpdateLabel>
                        <UserInput
                          type="file"
                          id="file"
                          onChange={handleUploadImage}
                        />
                      </UserUpdateUpload>

                      <UserUploadButton type="submit">
                        {loading ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'ATUALIZAR'}
                      </UserUploadButton>

                    </UserUpdateRight>

                  </UserUpdateForm>

                </UserUpdate>
              </UserContainer>
            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};