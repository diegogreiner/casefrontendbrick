import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

type Props = {
  name: string
}

const ErrorMessageStyled = styled.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  padding: 0 16px;
  color: #d95757;
`

const WarningMessageStyled = styled.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  padding: 0 16px;
  color: #1a202c;
`

const CorrectMessageStyled = styled.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  padding: 0 16px;
  color: #268738;
`

export const ErrorMessage = ({ name }: Props) => {
  const {
    formState: { errors },
    getValues,
  } = useFormContext()

  const msg = {
    warning:
      'A senha precisa ter no mínimo 8 caracteres, incluindo um caracter especial.',
    correct: 'As senhas correspondem entre si',
  }
  const error = errors[name]?.message?.toString()
  const password = getValues('password')
  const confirmPassword = getValues('confirmPassword')

  if (name === 'confirmPassword') {
    if (error) {
      return <ErrorMessageStyled>{error}</ErrorMessageStyled>
    }
    if (password === confirmPassword) {
      if (password && confirmPassword) {
        return <CorrectMessageStyled>{msg.correct}</CorrectMessageStyled>
      }
    }
    return <WarningMessageStyled>{msg.warning}</WarningMessageStyled>
  }

  return (
    <ErrorMessageStyled>{errors[name]?.message?.toString()}</ErrorMessageStyled>
  )
}
