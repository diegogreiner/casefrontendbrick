import { useContext } from 'react'
import styled from 'styled-components'
import { LoginContext } from '../context'

const TextStyled = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #1a202c;
`

const LinkStyled = styled.a`
  color: #ff3300;
  text-decoration: underline;
  cursor: pointer;
  padding-left: 2px;
`
export const SignUp = () => {
  const { setPage, page } = useContext(LoginContext)

  const handleClick = () => {
    setPage('firstLogin')
  }

  return (
    <TextStyled>
      Ainda não é cliente Brick?
      <LinkStyled onClick={handleClick}>Proteja sua frota agora!</LinkStyled>
    </TextStyled>
  )
}
