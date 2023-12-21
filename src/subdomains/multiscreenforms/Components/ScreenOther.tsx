import { useContext } from 'react'
import { FormOneContainer } from './FormOne'
import {
  Container,
  Description,
  Header,
  SectionContainer,
  Title,
} from '../../../shared/components/ui/MobileStyles'
import { MultiscreenFormsContext } from '../contexts'
import { FormTwoContainer } from './FormTwo'
import { FormThreeContainer } from './FormTheree'
import { FormFourContainer } from './FormFour'

export const ScreenOther = () => {
  const { screenNumber } = useContext(MultiscreenFormsContext)

  if (screenNumber !== '1') {
    return (
      <SectionContainer>
        <Header>
          <Title>Cadastro na Locadora</Title>
          <Description>
            Precisamos de algumas informações para realizar o seu pré-cadastro
            na locadora.
          </Description>
        </Header>
        <Container>
          {screenNumber === '2' ? <FormOneContainer /> : null}
          {screenNumber === '3' ? <FormTwoContainer /> : null}
          {screenNumber === '4' ? <FormThreeContainer /> : null}
          {screenNumber === '5' ? <FormFourContainer /> : null}
        </Container>
      </SectionContainer>
    )
  }

  return null
}
