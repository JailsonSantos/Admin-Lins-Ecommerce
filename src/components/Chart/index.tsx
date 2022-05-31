import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, ChartTitle, } from './styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

interface DataUserProps {
  name: string;
  active_user: number;
}

interface DataProductProps {
  name: string;
  sales: number;
}

interface ChatProps {
  title: string;
  data: DataUserProps[] | DataProductProps[],
  grid: boolean;
  dataKey: string;
}

function Chart({ title, data, dataKey, grid }: ChatProps) {

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      {title === 'Analise de Usuários' ?
        <>
          <ChartTitle>{title}</ChartTitle>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke={colors.primary} />
              <YAxis dataKey="active_user" stroke={colors.primary} />
              <Line type="monotone" dataKey={dataKey} stroke={colors.primary} />
              <Tooltip />
              {grid && <CartesianGrid stroke={colors.border} strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </>

        :

        <>
          <ChartTitle>{title}</ChartTitle>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke={colors.primary} />
              <YAxis dataKey="sales" stroke={colors.primary} />
              <Line type="monotone" dataKey={dataKey} stroke={colors.primary} />
              <Tooltip />
              {grid && <CartesianGrid stroke={colors.border} strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </>

      }
    </Container>
  );
};

export default Chart;
