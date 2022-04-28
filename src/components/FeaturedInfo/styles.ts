import styled from 'styled-components';

interface FeaturedMoneyRateProps {
  negative?: boolean;
}
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  padding: 25px;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight} ;

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
  }
`;

export const FeaturedTitle = styled.span`
  font-size: 1.5rem;
`;

export const FeaturedMoneyContainer = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
`;

export const FeaturedMoney = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const FeaturedMoneyRate = styled.span<FeaturedMoneyRateProps>`
  display: flex;
  align-items: center;

  svg{
    font-size: 20px;
    margin-left: 5px;
    color: ${({ negative, theme }) => negative ? theme.red : theme.green};
  }
`;

export const FeaturedSub = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.shade}
`;
