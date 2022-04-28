import {
  Container,
  SidebarWrapper,
  SidebarMenu,
  Title,
  SidebarList,
  SidebarListItem,
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
import Link from 'next/link';

function Sidebar() {
  return (
    <Container>
      <SidebarWrapper>

        <SidebarMenu>
          <Title>Painel de Controle</Title>
          <SidebarList>
            <Link href="/">
              <a>
                <SidebarListItem active>
                  <LineStyle />
                  Início
                </SidebarListItem>
              </a>
            </Link>
            <SidebarListItem>
              <Timeline />
              Análise
            </SidebarListItem>

            <SidebarListItem>
              <TrendingUp />
              Vendas
            </SidebarListItem>

          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <Title>Menu Rápido</Title>
          <SidebarList>
            <Link href="/users">
              <a>
                <SidebarListItem>
                  <PersonOutline />
                  Usuários
                </SidebarListItem>
              </a>
            </Link>
            <Link href="/products">
              <a>
                <SidebarListItem>
                  <Storefront />
                  Produtos
                </SidebarListItem>
              </a>
            </Link>
            <SidebarListItem>
              <AttachMoney />
              Transações
            </SidebarListItem>
            <SidebarListItem>
              <BarChart />
              Relatórios
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <Title>Notificações</Title>
          <SidebarList>
            <SidebarListItem>
              <MailOutline />
              E-mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeed />
              Comentários
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline />
              Mensagens
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <Title>Pessoal</Title>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline />
              Gerenciar
            </SidebarListItem>
            <SidebarListItem>
              <Timeline />
              Análise
            </SidebarListItem>
            <SidebarListItem>
              <ReportOutlined />
              Relatórios
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
