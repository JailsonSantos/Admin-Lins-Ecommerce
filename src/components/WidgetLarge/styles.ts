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

  color: ${({ theme }) => theme.colors.textCard};
  border: thin solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary};
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

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

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
  
  color: ${({ typeStatus, theme }) => typeStatus === "Aprovado" ? theme.colors.success : typeStatus === 'Pendente' ? theme.colors.pending : theme.colors.declined};
  background-color: ${({ typeStatus, theme }) => typeStatus === 'Aprovado' ? theme.colors.successLight : typeStatus === 'Pendente' ? theme.colors.pendingLight : theme.colors.declinedLight};

  &:hover {
    background-color: ${({ typeStatus, theme }) => typeStatus === 'Aprovado' ? theme.colors.successDark : typeStatus === 'Pendente' ? theme.colors.pendingDark : theme.colors.declinedDark};
  }
`;

