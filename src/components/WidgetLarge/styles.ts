import { lighten } from 'polished';
import styled from 'styled-components';


interface ButtonStatusProps {
  typeStatus: String;
}

export const Container = styled.div`
  flex: 2;
  padding: 20px;
  transition: 0.2s;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight} ;

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
  }
`;

export const WidgetTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;

`;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
`;

export const TdUser = styled.td`
  display: flex;
  font-weight: 600;
  align-items: center;
`;

export const WidgetImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 50%;
`;

export const WidgetName = styled.span``;

export const TdDate = styled.td`
  font-weight: 300;
`;

export const TdAmount = styled.td`
  font-weight: 300;
`;

export const TdStatus = styled.td``;

export const ButtonStatus = styled.button<ButtonStatusProps>`
  border: none;
  padding: 5px 10px;
  border-radius: 5px;

  color: ${({ typeStatus, theme }) => typeStatus === "Aprovado" ? theme.success : typeStatus === 'Pendente' ? theme.pending : theme.declined};
  background-color: ${({ typeStatus, theme }) => typeStatus === 'Aprovado' ? theme.successLight : typeStatus === 'Pendente' ? theme.pendingLight : theme.declinedLight};

  &:hover {
    background-color: ${({ typeStatus, theme }) => typeStatus === 'Aprovado' ? theme.successDark : typeStatus === 'Pendente' ? theme.pendingDark : theme.declinedDark};
  }
`;

