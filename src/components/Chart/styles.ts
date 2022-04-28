import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  padding:  20px;

  transition: 0.2s;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
  }
`;


export const ChartTitle = styled.h3``;