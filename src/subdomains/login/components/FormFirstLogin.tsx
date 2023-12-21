import styled from 'styled-components'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirstLoginSchema, FirstLoginSchemaData } from '../schemas'

type Props = {
  children: ReactNode
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  text-align: left;
`

export const FormFirstLogin = ({ children }: Props) => {
  const LoginForm = useForm<FirstLoginSchemaData>({
    resolver: zodResolver(FirstLoginSchema),
    mode: 'onTouched',
  })

  const { handleSubmit } = LoginForm

  const createUser = (data: FirstLoginSchemaData) => {
    alert(
      `Cadastro efetuado com sucesso: \nNome: ${data.name} \nSenha: ${data.password} \nConfirmação: ${data.confirmPassword}`,
    )
  }

  return (
    <FormProvider {...LoginForm}>
      <FormContainer onSubmit={handleSubmit(createUser)}>
        {children}
      </FormContainer>
    </FormProvider>
  )
}
