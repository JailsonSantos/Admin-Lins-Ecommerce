// Styles Global
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
  NewUserGender,
  NewUserInputRadio,
  NewUserLabelGender,
  NewUserSelect,
  NewUserOption,
  NewUserButton,
} from '../../styles/newUserStyles';

//Components
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

export default function NewUser() {

  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <SectionContainer>
          <WidgetContainer>
            <Container>

              <NewUserTitle>Novo Usuário</NewUserTitle>
              <NewUserForm>
                <NewUserItem>
                  <NewUserLabel>Nome de Usuário</NewUserLabel>
                  <NewUserInput type="text" placeholder="Nome de Usuário" />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Nome Completo</NewUserLabel>
                  <NewUserInput type="text" placeholder="Nome Completo" />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>E-mail</NewUserLabel>
                  <NewUserInput type="email" placeholder="seuemail@gmail.com" />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Senha</NewUserLabel>
                  <NewUserInput type="password" placeholder="Sua senha" />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Telefone</NewUserLabel>
                  <NewUserInput type="text" placeholder="(00) 00000-0000" />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Endereço</NewUserLabel>
                  <NewUserInput type="text" placeholder="São Luís | MA" />
                </NewUserItem>
                <NewUserItem>
                  <NewUserLabel>Gênero</NewUserLabel>
                  <NewUserGender>
                    <NewUserInputRadio type="radio" name="genero" id="M" value="Masculino" />
                    <NewUserLabelGender htmlFor="M">Masculino</NewUserLabelGender>
                    <NewUserInputRadio type="radio" name="genero" id="F" value="Feminino" />
                    <NewUserLabelGender htmlFor="F">Feminino</NewUserLabelGender>
                    <NewUserInputRadio type="radio" name="genero" id="Outros" value="Outros" />
                    <NewUserLabelGender htmlFor="Outros">Outros</NewUserLabelGender>
                  </NewUserGender>
                </NewUserItem>

                <NewUserItem>
                  <NewUserLabel>Ativos</NewUserLabel>
                  <NewUserSelect name="ativo" id="ativo">
                    <NewUserOption value="sim">Sim</NewUserOption>
                    <NewUserOption value="nao">Não</NewUserOption>
                  </NewUserSelect>
                </NewUserItem>

                <NewUserButton>Criar</NewUserButton>


              </NewUserForm>


            </Container>
          </WidgetContainer>
        </SectionContainer>
      </Main>
    </>
  )
};