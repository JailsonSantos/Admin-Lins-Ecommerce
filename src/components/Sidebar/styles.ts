import styled from 'styled-components';

interface NavLinkContainerProps {
  isActive: boolean;
}

export const Container = styled.div`
  flex: 1;
  top: 50px;
  position: sticky;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.backgroundLight};
`;

export const SidebarWrapper = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.textHighlight};
`;

export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 13px;
  color: ${({ theme }) => theme.shade};
`;

export const SidebarList = styled.ul`
  padding: 0 5px;
  list-style: none;
`;

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  a{
    padding: 5px;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    background-color: ${({ isActive, theme }) => isActive ? theme.selected : 'transparent'};

    &:hover{
      background-color: ${({ theme }) => theme.selected};
    }

    svg{
      font-size: 20px;
      margin-right: 5px;
    }
    @media(max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;

