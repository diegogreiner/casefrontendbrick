import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormTwoSchema, FormFour } from '../schemas'
import {
  FormContainer,
  Title,
} from '../../../shared/components/ui/MobileStyles'
import { Field } from '../../../shared/components/business/Field'
import { MultiscreenFormsContext } from '../contexts'
import { Label } from '../../../shared/components/business/Label'
import { Input } from '../../../shared/components/business/Input'
import { ErrorMessage } from '../../../shared/components/business/ErrorMessage'
import { Button } from '../../../shared/components/business/Button'
import { ArrowSVG } from './ArrowSVG'

export const FormFourContainer = () => {
  const { setScreenNumber, setInitialValue, initialValue } = useContext(
    MultiscreenFormsContext,
  )

  const fourForm = useForm<FormTwoSchema>({
    resolver: zodResolver(FormFour),
    mode: 'onTouched',
  })

  const { handleSubmit } = fourForm

  const handleSubmitForm = (data: FormTwoSchema) => {
    setInitialValue([...initialValue, data])
    setScreenNumber('1')
    alert('Seus dados estão no console')
    console.log([...initialValue, data])
  }

  return (
    <FormProvider {...fourForm}>
      <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <Title>Informações de contato da sua Empresa</Title>
        <Field>
          <Label htmlFor="email" text="Insira o e-mail da empresa" />
          <Input type="text" name="email" placeholder="usuario@email.com" />
          <ErrorMessage name="email" />
        </Field>
        <Field>
          <Label htmlFor="phoneCompany" text="Insira o telefone da empresa" />
          <Input
            type="text"
            name="phoneCompany"
            placeholder="(**) *****-****"
          />
          <ErrorMessage name="phoneCompany" />
        </Field>
        <Field>
          <Label
            htmlFor="phoneCellCompany"
            text="Insira o telefone celular da empresa"
          />
          <Input
            type="text"
            name="phoneCellCompany"
            placeholder="(**) *****-****"
          />
          <ErrorMessage name="phoneCellCompany" />
        </Field>
        <Button text="Avançar" icon={<ArrowSVG />} />
      </FormContainer>
    </FormProvider>
  )
}
