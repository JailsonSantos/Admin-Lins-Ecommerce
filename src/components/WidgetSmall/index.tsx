import {
  Container,
  WidgetTitle,
  WidgetList,
  WidgetListItem,
  WidgetImage,
  WidgetUser,
  WidgetUsername,
  WidgetUserOffice,
  WidgetButton,
} from "./styles"

import { Visibility } from "@material-ui/icons"

export default function WidgetSmall() {
  return (
    <Container>
      <WidgetTitle>Novos Membros Associados</WidgetTitle>
      <WidgetList>
        <WidgetListItem>
          <WidgetImage src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/66245e/66245e63995d81634fb53c2661442957_large.jpg" alt="Homem de terno preto e gravata azul." />
          <WidgetUser>
            <WidgetUsername>Jailson Santos</WidgetUsername>
            <WidgetUserOffice>Analista de Sistemas</WidgetUserOffice>
          </WidgetUser>
          <WidgetButton>
            <Visibility />
            Mostrar
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetImage src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/66245e/66245e63995d81634fb53c2661442957_large.jpg" alt="Homem de terno preto e gravata azul." />
          <WidgetUser>
            <WidgetUsername>Jailson Santos</WidgetUsername>
            <WidgetUserOffice>Analista de Sistemas</WidgetUserOffice>
          </WidgetUser>
          <WidgetButton>
            <Visibility />
            Mostrar
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetImage src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/66245e/66245e63995d81634fb53c2661442957_large.jpg" alt="Homem de terno preto e gravata azul." />
          <WidgetUser>
            <WidgetUsername>Jailson Santos</WidgetUsername>
            <WidgetUserOffice>Analista de Sistemas</WidgetUserOffice>
          </WidgetUser>
          <WidgetButton>
            <Visibility />
            Mostrar
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetImage src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/66245e/66245e63995d81634fb53c2661442957_large.jpg" alt="Homem de terno preto e gravata azul." />
          <WidgetUser>
            <WidgetUsername>Jailson Santos</WidgetUsername>
            <WidgetUserOffice>Analista de Sistemas</WidgetUserOffice>
          </WidgetUser>
          <WidgetButton>
            <Visibility />
            Mostrar
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <WidgetImage src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/66245e/66245e63995d81634fb53c2661442957_large.jpg" alt="Homem de terno preto e gravata azul." />
          <WidgetUser>
            <WidgetUsername>Jailson Santos</WidgetUsername>
            <WidgetUserOffice>Analista de Sistemas</WidgetUserOffice>
          </WidgetUser>
          <WidgetButton>
            <Visibility />
            Mostrar
          </WidgetButton>
        </WidgetListItem>
      </WidgetList>
    </Container>
  )
}