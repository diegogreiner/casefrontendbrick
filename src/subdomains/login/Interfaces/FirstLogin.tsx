import { useContext } from 'react'
import { Button } from '../../../shared/components/business/Button'
import { Container } from '../components/Container'
import { FormFirstLogin } from '../components/FormFirstLogin'
import { Field } from '../../../shared/components/business/Field'
import { FormContainer } from '../components/FormContainer'
import { Input } from '../../../shared/components/business/Input'
import { InputPassword } from '../components/Input/InputPassword'
import { Label } from '../../../shared/components/business/Label'
import { LoginContext } from '../context'
import { ErrorMessage } from '../../../shared/components/business/ErrorMessage'
import {
  Description,
  HeaderContainer,
  Title,
} from '../components/Header/Styles'
import { Logo } from '../components/LogoSVG'
import { Tip } from '../components/Tip/Tip'
import { LogoMobile } from '../components/LogoMobile'

export const FirstLoginInterface = () => {
  const { page } = useContext(LoginContext)

  if (page === 'firstLogin') {
    return (
      <Container>
        <LogoMobile />
        <Logo />
        <FormContainer>
          <HeaderContainer>
            <Title>Que bom te ver por aqui! </Title>
            <Description>Vamos configurar sua conta?</Description>
          </HeaderContainer>
          <FormFirstLogin>
            <Field>
              <Label htmlFor="name" text="Nome"></Label>
              <Input
                name="name"
                type="text"
                placeholder="Insira aqui seu nome"
              />
              <ErrorMessage name="name" />
            </Field>
            <Field>
              <Label text="Senha"></Label>
              <InputPassword
                name="password"
                placeholder="Insira aqui sua nova senha"
              />
              <InputPassword
                name="confirmPassword"
                placeholder="Repita sua nova senha"
              />
              <ErrorMessage name="confirmPassword" />
            </Field>
            <Button text="Avançar" />
          </FormFirstLogin>
        </FormContainer>
        <Tip />
      </Container>
    )
  }

  return null
}
