import { useEffect, useState } from "react";
import { userRequest } from "../../services/api";
import {
  Container,
  WidgetTitle,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TdUser,
  WidgetImage,
  WidgetName,
  TdDate,
  TdAmount,
  TdStatus,
  ButtonStatus,
} from "./styles"

interface ProductsProps {
  _id: string;
  productId: string;
  quantity: number;
}

interface OrdersProps {
  _id: string;
  userId: string;
  products: ProductsProps[];
  amount: number;
  address: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

import { format } from 'timeago.js';

export default function WidgetLarge() {

  const [orders, setOrders] = useState<OrdersProps[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await userRequest.get('/orders');
        setOrders(response.data);
      } catch (error: any) {
        throw error.message;
      }
    }
    getOrders();
  }, []);

  return (
    <Container>
      <WidgetTitle>Últimas transações</WidgetTitle>
      <Table>
        <Thead>
          <Tr>
            <Th>Cliente</Th>
            <Th>Data</Th>
            <Th>Valor</Th>
            <Th>Situação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map(order => (
            <Tr key={order._id}>
              <TdUser>
                <WidgetImage src="https://s2.glbimg.com/CDxRN1MNzIrIZ7GXoTgIaPccMj8=/0x0:946x945/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/U/XJwwFYTv6ACahBnR9JCw/vitima.jpg" alt="Homem de terno preto e gravata azul." />
                <WidgetName>ID: {order._id.slice(0, 4)}</WidgetName>
              </TdUser>
              <TdDate> {format(order.createdAt)}</TdDate>
              <TdAmount>R$ {order.amount}</TdAmount>
              <TdStatus>
                <ButtonStatus typeStatus={order.status}>{order.status}</ButtonStatus>
              </TdStatus>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  )
}