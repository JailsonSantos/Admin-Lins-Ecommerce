import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;

  transition: 0.2s;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.textCard};
  border: thin solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary};
  }
`;

export const WidgetTitle = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
`;

export const WidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WidgetListItem = styled.li`
  display: flex;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

export const WidgetPerfil = styled.div`
  display: flex;
  align-items: center;
`;

export const WidgetImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const WidgetUser = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: column;
`;

export const WidgetUsername = styled.span`
  font-weight: 600;
`;

export const WidgetUserOffice = styled.span`
  font-weight: 300;
`;

export const WidgetButton = styled.button`
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 20px;

  color: ${({ theme }) => theme.colors.text};
  outline-color: ${({ theme }) => theme.colors.primary}; 
  background-color: ${({ theme }) => theme.colors.selectedHover};
  transition: 0.2s;

  &:hover{
    background-color: ${({ theme }) => theme.colors.selected};
  }

  a{ 
    display: flex;
    align-items: center;
  }

  svg{
    font-size: 20px;
    margin-right: 5px;
  }
`;
