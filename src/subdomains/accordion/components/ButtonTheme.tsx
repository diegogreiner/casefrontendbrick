import styled from 'styled-components'
import { useContext } from 'react'
import { AccordionContext } from '../context'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 6px 6px 12px;
  border-radius: 24px;
  gap: 32px;
  background-color: ${({ theme }) => theme.bgItem};

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colorButtonTheme};
    margin: 0;
  }
`

export const ButtonContainer = styled.div<{ oldTheme: string }>`
  border: 4px solid ${({ theme }) => theme.borderButtonTheme};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.bgButtonTheme};
  padding: 4px;
  width: 24px;
  display: flex;
  justify-content: ${({ oldTheme }) =>
    oldTheme === 'light' ? 'start' : 'end'};
  animation: click 1s linear;
  cursor: pointer;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.borderButtonTheme};
  }

  @keyframes click {
    0% {
      justify-content: ${({ oldTheme }) =>
        oldTheme === 'light' ? 'start' : 'end'};
    }
    100% {
      justify-content: ${({ oldTheme }) =>
        oldTheme === 'light' ? 'end' : 'start'};
    }
  }
`

export const ButtonTheme = () => {
  const { theme, setTheme } = useContext(AccordionContext)
  const oldTheme = theme

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Container>
      <p>Dark Mode</p>
      <ButtonContainer onClick={handleClick} oldTheme={oldTheme}>
        <span></span>
      </ButtonContainer>
    </Container>
  )
}
