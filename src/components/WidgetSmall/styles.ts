import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;

  transition: 0.2s;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight} ;

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
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

export const WidgetImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const WidgetUser = styled.div`
  display: flex;
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
  border-radius: 10px;
  color: ${({ theme }) => theme.textHighlight};
  background-color: ${({ theme }) => theme.buttonLight};
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.textHighlight)};
    background-color: ${({ theme }) => darken(0.02, theme.buttonLight)};
  }

  svg{
    font-size: 20px;
    margin-right: 5px;
  }
`;
