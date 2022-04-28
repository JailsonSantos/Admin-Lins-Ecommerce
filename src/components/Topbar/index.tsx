import Link from 'next/link';

// Styles component
import {
  Container,
  TopbarWrapper,
  TopLeft,
  Logo,
  TopRight,
  TopbarIconContainer,
  TopIconBadge,
  ImageAvatar,
} from './styles';

// Icons 
import { NotificationsNone, Language, Settings, } from '@material-ui/icons';

function Topbar() {
  return (
    <Container>
      <TopbarWrapper>
        <TopLeft>
          <Link href="/">
            <a>
              <Logo>Lins-Admin</Logo>
            </a>
          </Link>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <ImageAvatar src='https://github.com/jailsonsantos.png' alt="Imagem de Perfil, com camisa azul." />
        </TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
