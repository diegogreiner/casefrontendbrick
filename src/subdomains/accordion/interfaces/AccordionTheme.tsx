import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { AccordionContext } from '../context'
import { darkTheme, lightTheme } from '../theme'
import {
  AccordionContainer,
  Container,
  SectionContainer,
} from '../components/Styles'
import { Header } from '../components/Header'
import { List } from '../components/List'
import { IsCustoms } from '../components/IsCustoms'
import ContainerDetails from '../components/ContainerDetails'
import { OpenDetails } from '../components/OpenDetails'
import { ButtonTheme } from '../components/ButtonTheme'

export const AccordionThemeInterface = () => {
  const { theme } = useContext(AccordionContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <SectionContainer>
        <ButtonTheme />
        <Container>
          <Header />
          <AccordionContainer>
            <List />
            <IsCustoms />
            <ContainerDetails />
            <OpenDetails />
          </AccordionContainer>
        </Container>
      </SectionContainer>
    </ThemeProvider>
  )
}
