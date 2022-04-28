import {
  Container,
  ChartTitle,
} from './styles';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

  return (
    <Container>
      {title === 'Analise de Usuários' ?
        <>
          <ChartTitle>{title}</ChartTitle>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <YAxis dataKey={"active_user"} stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </>

        :

        <>
          <ChartTitle>{title}</ChartTitle>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <YAxis dataKey="sales" stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </>

      }
    </Container>
  );
};

export default Chart;
