import {
  Description,
  SectionContainer,
  Title,
  Container,
} from '../../../shared/components/ui/MobileStyles'
import { Header } from '../components/Header'
import { List } from '../components/List'

export const InfiniteScrollInterface = () => {
  return (
    <>
      <Header />
      <SectionContainer>
        <Container>
          <Title>Relatório de Vistoria</Title>
          <Description>Imagens da vistoria do veículo</Description>
          <List />
        </Container>
      </SectionContainer>
    </>
  )
}
