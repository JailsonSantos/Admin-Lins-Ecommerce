import {
  Container,
  SidebarWrapper,
  SidebarMenu,
  Title,
  SidebarList,
} from './styles';

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  ReportOutlined
} from '@material-ui/icons';

// Component
import NavLink from './NavLink';

function Sidebar() {
  return (
    <Container>
      <SidebarWrapper>

        <SidebarMenu>
          <Title>Painel de Controle</Title>
          <SidebarList>
            <NavLink title="Início" path="/" >
              <LineStyle />
            </NavLink>
            <NavLink title="Análise" path="#" >
              <Timeline />
            </NavLink>
            <NavLink title="Vendas" path="#" >
              <TrendingUp />
            </NavLink>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <Title>Menu Rápido</Title>
          <SidebarList>
            <NavLink title="Usuários" path="/users" >
              <PersonOutline />
            </NavLink>
            <NavLink title="Produtos" path="/products" >
              <Storefront />
            </NavLink>
            <NavLink title="Transações" path="#" >
              <AttachMoney />
            </NavLink>
            <NavLink title="Relatórios" path="#" >
              <BarChart />
            </NavLink>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <Title>Notificações</Title>
          <SidebarList>
            <NavLink title="E-mail" path="#" >
              <MailOutline />
            </NavLink>
            <NavLink title="Comentários" path="#" >
              <DynamicFeed />
            </NavLink>
            <NavLink title="Mensagens" path="#" >
              <ChatBubbleOutline />
            </NavLink>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <Title>Pessoal</Title>
          <SidebarList>
            <NavLink title=" Gerenciar" path="#" >
              <WorkOutline />
            </NavLink>
            <NavLink title="Análise" path="#" >
              <Timeline />
            </NavLink>
            <NavLink title="Relatórios" path="#" >
              <ReportOutlined />
            </NavLink>
          </SidebarList>
        </SidebarMenu>

      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
