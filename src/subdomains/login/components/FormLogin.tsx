import styled from 'styled-components'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginSchemaData } from '../schemas'

type Props = {
  children: ReactNode
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const FormLogin = ({ children }: Props) => {
  const LoginForm = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onTouched',
  })

  const { handleSubmit } = LoginForm

  const Validation = (data: LoginSchemaData) => {
    alert(
      `Login efetuado com sucesso: \nE-mail: ${data.email} \nSenha: ${data.password}`,
    )
  }

  return (
    <FormProvider {...LoginForm}>
      <FormContainer onSubmit={handleSubmit(Validation)}>
        {children}
      </FormContainer>
    </FormProvider>
  )
}
