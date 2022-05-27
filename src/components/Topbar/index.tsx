import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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
import { NotificationsNone, Language, Settings, ExitToApp } from '@material-ui/icons';
import { logout } from '../../redux/apiCalls';

function Topbar() {

  const { currentUser } = useSelector((state: RootState) => state.user);



  const dispatch = useDispatch();


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
          <ImageAvatar src={currentUser.img} alt={`Imagem de Perfil, ${currentUser.username}`} />
          <TopbarIconContainer onClick={() => logout(dispatch)}>
            <ExitToApp />
          </TopbarIconContainer>
        </TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
