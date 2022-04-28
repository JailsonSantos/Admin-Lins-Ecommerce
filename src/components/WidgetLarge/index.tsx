import {
  Container,
  WidgetTitle,
  Table,
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

export default function WidgetLarge() {
  return (
    <Container>
      <WidgetTitle>Últimas transações</WidgetTitle>
      <Table>
        <Tr>
          <Th>Cliente</Th>
          <Th>Data</Th>
          <Th>Quantidade</Th>
          <Th>Situação</Th>
        </Tr>
        <Tr>
          <TdUser>
            <WidgetImage src="https://s2.glbimg.com/CDxRN1MNzIrIZ7GXoTgIaPccMj8=/0x0:946x945/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/U/XJwwFYTv6ACahBnR9JCw/vitima.jpg" alt="Homem de terno preto e gravata azul." />
            <WidgetName>Langela Lins</WidgetName>
          </TdUser>
          <TdDate>8 Jul 2022</TdDate>
          <TdAmount> R$ 122,00</TdAmount>
          <TdStatus>
            <ButtonStatus typeStatus="Aprovado">Aprovado</ButtonStatus>
          </TdStatus>
        </Tr>
        <Tr>
          <TdUser>
            <WidgetImage src="https://s2.glbimg.com/CDxRN1MNzIrIZ7GXoTgIaPccMj8=/0x0:946x945/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/U/XJwwFYTv6ACahBnR9JCw/vitima.jpg" alt="Homem de terno preto e gravata azul." />
            <WidgetName>Langela Lins</WidgetName>
          </TdUser>
          <TdDate>8 Jul 2022</TdDate>
          <TdAmount> R$ 122,00</TdAmount>
          <TdStatus>
            <ButtonStatus typeStatus="Pendente">Pendente</ButtonStatus>
          </TdStatus>
        </Tr>
        <Tr>
          <TdUser>
            <WidgetImage src="https://s2.glbimg.com/CDxRN1MNzIrIZ7GXoTgIaPccMj8=/0x0:946x945/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/U/XJwwFYTv6ACahBnR9JCw/vitima.jpg" alt="Homem de terno preto e gravata azul." />
            <WidgetName>Langela Lins</WidgetName>
          </TdUser>
          <TdDate>8 Jul 2022</TdDate>
          <TdAmount> R$ 122,00</TdAmount>
          <TdStatus>
            <ButtonStatus typeStatus="Recusado">Recusado</ButtonStatus>
          </TdStatus>
        </Tr>
      </Table>
    </Container>
  )
}