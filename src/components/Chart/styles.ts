import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  padding:  20px;

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

export const ChartTitle = styled.h3``;