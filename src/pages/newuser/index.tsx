import { useState } from 'react';
import toast from 'react-hot-toast';
import ReactLoading from "react-loading";

import {
  Main,
  SectionContainer,
  WidgetContainer,
} from '../../styles/globalStyles';

// Styles Page
import {
  Container,
  NewUserTitle,
  NewUserForm,
  NewUserItem,
  NewUserLabel,
  NewUserInput,
  NewUserSelect,
  NewUserOption,
  NewUserButton,
  NewUserImage,
  NewUserInputImage,
  NewUsertCreateLabel,
} from '../../styles/newUserStyles';

//Components
import { Publish } from '@material-ui/icons';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/apiCalls';

// Validation forms
import * as yup from 'yup'

import app from '../../firebase';
import {
  ref,
  getStorage,
  getDownloadURL,
  uploadBytesResumable
} from 'firebase/storage';


export default function NewUser() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState("false");
  const [occupation, setOccupation] = useState('');
  const [file, setFile] = useState<File>({} as File);

  const handleUploadImage = function (event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (!fileList) return;
    setFile(fileList[0]);
  };

  async function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!(await validate())) return;

    try {
      setLoading(true);

      // Chamada a API 
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

              const user = { username, email, password, occupation, isAdmin, img: downloadURL };

              try {
                await createUser(user, dispatch);

                toast("Usuário cadastrado com sucesso!", {
                  style: {
                    background: '#00947e',
                    color: '#FFF',
                  }
                });

                setUsername('');
                setEmail('');
                setPassword('');
                setIsAdmin("false");
                setOccupation('');
                setFile({} as File);

              } catch (error: any) {
                console.log("Deu error no cadastro: " + error.response.data)
              } finally {
                setLoading(false);
              }
            });
          }
        );

      } else {
        const img = "https://amajoinville.jv203.net/wp-content/uploads/sites/1472/2021/12/imagem-sem-foto-de-perfil-do-facebook-1348864936180_956x5001.jpg";

        const user = { username, email, password, occupation, isAdmin, img };

        await createUser(user, dispatch);

        toast("Usuário cadastrado com sucesso!", {
          style: {
            background: '#00947e',
            color: '#FFFFFF',
          }
        });

        setUsername('');
        setEmail('');
        setPassword('');
        setIsAdmin("false");
        setOccupation('');
        setFile({} as File);
      }
    } catch (error: any) {
      toast("Error a cadastrar novo usuário. Tente novamente", {
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
      occupation: yup.string().required('Profissão é obrigatório'),
      password: yup.string().required('Senha é obrigatória').min(4, 'Senha teve ter no mínimo 4 caracteres'),
      email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
      username: yup.string().required('Nome de usuário é obrigatório'),
    });

    try {
      await schema.validate({ username, email, occupation, password });
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

              <NewUserTitle>Novo Usuário</NewUserTitle>
              <NewUserForm className="form" onSubmit={(event) => handleSubmitForm(event)}>
                <NewUserItem>
                  <NewUserLabel>Nome de Usuário</NewUserLabel>
                  <NewUserInput
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Nome de Usuário"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </NewUserItem>

                <NewUserItem>
                  <NewUserLabel>E-mail</NewUserLabel>
                  <NewUserInput
                    name="email"
                    type="email"
                    value={email}
                    placeholder="seuemail@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Senha</NewUserLabel>
                  <NewUserInput
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>  Profissão</NewUserLabel>
                  <NewUserInput
                    type="text"
                    name="occupation"
                    value={occupation}
                    placeholder="Ex: Professor, Influencer..."
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Administrator</NewUserLabel>
                  <NewUserSelect
                    name="isAdmin"
                    value={isAdmin ?? ""}
                    onChange={(e) => { setIsAdmin(e.target.value) }}
                  >
                    <NewUserOption value="true">Sim</NewUserOption>
                    <NewUserOption value="false">Não</NewUserOption>
                  </NewUserSelect>
                </NewUserItem>

                <NewUserItem >
                  <NewUsertCreateLabel htmlFor="file">
                    {file?.name
                      ?
                      <NewUserImage src={URL.createObjectURL(file)} alt={file.name} />
                      :
                      <NewUserImage src="/images/sem-imagem.png" alt="Seleciona uma imagem" />
                    }
                    <NewUserInputImage
                      type="file"
                      id="file"
                      onChange={handleUploadImage} />
                    <Publish />
                  </NewUsertCreateLabel>
                </NewUserItem>

                <NewUserButton type="submit">
                  {loading ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'CRIAR'}
                </NewUserButton>

              </NewUserForm>


            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};