import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormOne, FormOneSchema } from '../schemas'
import { FormContainer } from '../../../shared/components/ui/MobileStyles'
import { Field } from '../../../shared/components/business/Field'
import { MultiscreenFormsContext } from '../contexts'
import { Label } from '../../../shared/components/business/Label'
import { Input } from '../../../shared/components/business/Input'
import { ErrorMessage } from '../../../shared/components/business/ErrorMessage'
import { Button } from '../../../shared/components/business/Button'
import { ArrowSVG } from './ArrowSVG'
import { Select } from './Select'

export const FormOneContainer = () => {
  const { setScreenNumber, setInitialValue, initialValue } = useContext(
    MultiscreenFormsContext,
  )

  const OneForm = useForm<FormOneSchema>({
    resolver: zodResolver(FormOne),
    mode: 'onTouched',
  })

  const { handleSubmit } = OneForm

  const handleSubmitForm = (data: FormOneSchema) => {
    console.log(data)
    setInitialValue([...initialValue, data])
    setScreenNumber('3')
  }

  return (
    <FormProvider {...OneForm}>
      <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <Field>
          <Label htmlFor="fullName" text="Insira seu nome completo" />
          <Input type="text" name="fullName" placeholder="Nome e Sobrenome" />
          <ErrorMessage name="fullName" />
        </Field>
        <Field>
          <Label htmlFor="cpf" text="Insira o número do seu CPF" />
          <Input type="text" name="cpf" placeholder="***.***.***-**" />
          <ErrorMessage name="cpf" />
        </Field>
        <Field>
          <Label htmlFor="cnh" text="Número da CNH" />
          <Input type="text" name="cnh" placeholder="***.***.***-**" />
          <ErrorMessage name="cnh" />
        </Field>
        <Field>
          <Label htmlFor="dateBirth" text="Insira sua data de nascimento" />
          <Input type="text" name="dateBirth" placeholder="DD/MM/AAAA" />
          <ErrorMessage name="dateBirth" />
        </Field>
        <Field>
          <Label
            htmlFor="dateFirstCnh"
            text="Insira a data da 1ª Habilitação"
          />
          <Input type="text" name="dateFirstCnh" placeholder="DD/MM/AAAA" />
          <ErrorMessage name="dateFirstCnh" />
        </Field>
        <Field>
          <Label htmlFor="validityCnh" text="Insira a validade da sua CNH" />
          <Input type="text" name="validityCnh" placeholder="DD/MM/AAAA" />
          <ErrorMessage name="validityCnh" />
        </Field>
        <Button text="Avançar" icon={<ArrowSVG />} />
      </FormContainer>
    </FormProvider>
  )
}
