import { darken } from 'polished';
import styled from 'styled-components';

interface NavLinkContainerProps {
  isActive: boolean;
}

export const Container = styled.div`
  flex: 1;
  top: 50px;
  position: sticky;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SidebarWrapper = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.shade};
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
    color: ${({ isActive, theme }) => isActive && theme.colors.text};
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.selected : 'transparent'};

    &:hover{
      background-color: ${({ isActive, theme }) => !isActive && theme.colors.selectedHover};
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

