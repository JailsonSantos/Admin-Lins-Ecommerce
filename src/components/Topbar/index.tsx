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
  TopbarSwitchContainer,
  Sol,
  Lua
} from './styles';

// Icons 
import { NotificationsNone, Language, Settings, ExitToApp } from '@material-ui/icons';
import { logout } from '../../redux/apiCalls';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { ThemeContextApp } from '../../context/ThemeContextApp';
import Switch from 'react-switch';

function Topbar() {

  const { title, colors } = useContext(ThemeContext)

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
          <TopbarSwitchContainer>
            <ThemeContextApp.Consumer>
              {({ toggleTheme }) => (
                <Switch
                  onChange={toggleTheme}
                  checked={title === 'dark'}
                  uncheckedIcon={<Lua />}
                  checkedIcon={<Sol />}
                  height={26}
                  width={50}
                  handleDiameter={20}
                  onColor={colors.secondary}
                  offColor={colors.textHighlight}
                  onHandleColor={colors.background}
                  offHandleColor={colors.pending}
                  boxShadow="0px 1px 3px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                  className="myToggle"
                  id="material-switch"
                />
              )}
            </ThemeContextApp.Consumer>
          </TopbarSwitchContainer>
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
