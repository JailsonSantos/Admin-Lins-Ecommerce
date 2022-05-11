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
import { useEffect, useState } from 'react';
import { userRequest } from '../../services/api';

interface IncomeProps {
  _id: number;
  total: number;
}

function FeaturedInfo() {

  const [income, setIncome] = useState<IncomeProps[]>([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const response = await userRequest.get("orders/income");
        setIncome(response.data);

        const lastSales = response.data[1].total * 100;
        const firstSales = response.data[0].total - 100;
        const totalPercent = Math.floor(lastSales / firstSales);

        setPercent(totalPercent);

      } catch (error: any) {
        throw error.message;
      }
    }
    getIncome();
  }, [])

  return (
    <Container>

      <FeaturedItem>
        <FeaturedTitle>Receita</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney> R$ {income[1]?.total}</FeaturedMoney>

          {percent < 0
            ?
            <FeaturedMoneyRate negative>
              {percent} % <ArrowDownward />
            </FeaturedMoneyRate>
            :
            <FeaturedMoneyRate>
              {percent} % <ArrowUpward />
            </FeaturedMoneyRate>
          }

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
