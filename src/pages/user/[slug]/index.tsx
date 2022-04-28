// Styles
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
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import Link from 'next/link';

export default function User() {

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
                <Link href="/newuser">
                  <a>
                    <UserAddButton>
                      Criar
                    </UserAddButton>
                  </a>
                </Link>
              </UserTitleContainer>

              <UserContainer>
                <UserShow>
                  <UserShowTop>
                    <UserShowImage src="https://github.com/jailsonsantos.png" alt="Foto de perfil, com camisa azul." />
                    <UserShowTopTitle>
                      <UserShowTopName>Jailson Santos</UserShowTopName>
                      <UserShowTopOffice>Design Gráfico</UserShowTopOffice>
                    </UserShowTopTitle>
                  </UserShowTop>
                  <UserShowBottom>
                    <UserShowTitle>Detalhes da Conta</UserShowTitle>
                    <UserShowInfo>
                      <PermIdentity />
                      <UserShowInfoTitle>Lins007</UserShowInfoTitle>
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
                      <UserShowInfoTitle>Lins007@gmail.com</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                      <LocationSearching />
                      <UserShowInfoTitle>São Luís | MA</UserShowInfoTitle>
                    </UserShowInfo>
                  </UserShowBottom>
                </UserShow>
                <UserUpdate>
                  <UserUpdateTitle>Editar</UserUpdateTitle>

                  <UserUpdateForm>

                    <UserUpdateLeft>
                      <UserUpdateItem>
                        <UserLabel>Nome do Usuário</UserLabel>
                        <UserUpdateInput type="text" placeholder="lins007" />
                      </UserUpdateItem>
                      <UserUpdateItem>
                        <UserLabel>Nome Completo</UserLabel>
                        <UserUpdateInput type="text" placeholder="Jailson Santos" />
                      </UserUpdateItem>
                      <UserUpdateItem>
                        <UserLabel>E-mail</UserLabel>
                        <UserUpdateInput type="email" placeholder="lins007@gmail.com" />
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
                        <UserUpdateImage src="https://github.com/jailsonsantos.png" alt="Foto de perfil, com camisa azul." />
                        <UserUpdateLabel htmlFor="file">
                          <Publish />
                        </UserUpdateLabel>
                        <UserInput type="file" id="file" />
                      </UserUpdateUpload>

                      <UserUploadButton>Atualizar</UserUploadButton>
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