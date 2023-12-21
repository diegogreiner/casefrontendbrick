import styled from 'styled-components'
import { useContext } from 'react'
import {
  Description,
  SectionContainer,
  Title,
} from '../../../shared/components/ui/MobileStyles'
import { Button } from '../../../shared/components/ui/Button'
import { MultiscreenFormsContext } from '../contexts'
import { ArrowSVG } from './ArrowSVG'

const Container = styled.section`
  background-color: #f7fafc;
  padding: 24px;
  max-width: 390px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.header`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
  color: #1a202c;
`

export const ScreenWelcome = () => {
  const { screenNumber, setScreenNumber } = useContext(MultiscreenFormsContext)

  if (screenNumber === '1') {
    return (
      <SectionContainer>
        <Container>
          <Header>
            <Title>Boas vindas ao cadastro da Locadora!</Title>
            <Description>
              Precisamos de algumas informações para realizar o seu pré-cadastro
              na nossa locadora.
            </Description>
          </Header>
          <Button onClick={() => setScreenNumber('2')}>
            Iniciar Cadastro
            <ArrowSVG />
          </Button>
        </Container>
      </SectionContainer>
    )
  }

  return null
}
