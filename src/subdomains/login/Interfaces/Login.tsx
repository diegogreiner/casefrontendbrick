import { useContext } from 'react'
import { Button } from '../../../shared/components/business/Button'
import { Container } from '../components/Container'
import { FormLogin } from '../components/FormLogin'
import { Field } from '../../../shared/components/business/Field'
import { ForgotPassword } from '../components/ForgotPassword'
import { FormContainer } from '../components/FormContainer'
import { Input } from '../../../shared/components/business/Input'
import { InputPassword } from '../components/Input/InputPassword'
import { Label } from '../../../shared/components/business/Label'
import { SignUp } from '../components/SignUp'
import { LoginContext } from '../context'
import { ErrorMessage } from '../../../shared/components/business/ErrorMessage'
import { LogoMobile } from '../components/LogoMobile'
import { HeaderContainer, Title } from '../components/Header/Styles'

export const LoginInterface = () => {
  const { page } = useContext(LoginContext)

  if (page === 'login') {
    return (
      <Container>
        <LogoMobile />
        <FormContainer>
          <HeaderContainer>
            <Title>Faça login em sua conta</Title>
          </HeaderContainer>
          <FormLogin>
            <Field>
              <Label htmlFor="email" text="E-mail"></Label>
              <Input
                name="email"
                type="text"
                placeholder="Insira aqui seu e-mail"
              />
              <ErrorMessage name="email" />
            </Field>
            <Field>
              <Label htmlFor="password" text="Senha"></Label>
              <InputPassword
                name="password"
                placeholder="Insira aqui sua senha"
              />
              <ErrorMessage name="password" />
            </Field>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
            <Button text="Entrar" />
            <SignUp />
          </FormLogin>
        </FormContainer>
      </Container>
    )
  }

  return null
}
