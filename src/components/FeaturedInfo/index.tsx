import {
  Container,
  FeaturedItem,
  FeaturedTitle,
  FeaturedMoneyContainer,
  FeaturedMoney,
  FeaturedMoneyRate,
  FeaturedSub
} from './styles';

import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

function FeaturedInfo() {
  return (
    <Container>

      <FeaturedItem>
        <FeaturedTitle>Receita</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney> R$ 29.032,00 </FeaturedMoney>
          <FeaturedMoneyRate negative>
            - 11.4 <ArrowDownward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compras do último mês</FeaturedSub>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedTitle>Vendas</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney> R$ 20.369,00 </FeaturedMoney>
          <FeaturedMoneyRate negative>
            - 1.4 <ArrowDownward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compras do último mês</FeaturedSub>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedTitle>Custos</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney> R$ 302,99 </FeaturedMoney>
          <FeaturedMoneyRate>
            + 2.4 <ArrowUpward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compras do último mês</FeaturedSub>
      </FeaturedItem>

    </Container>
  );
};

export default FeaturedInfo;
