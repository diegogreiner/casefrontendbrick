import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormTwoSchema, FormTwo } from '../schemas'
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

export const FormTwoContainer = () => {
  const { setScreenNumber, setInitialValue, initialValue } = useContext(
    MultiscreenFormsContext,
  )

  const twoForm = useForm<FormTwoSchema>({
    resolver: zodResolver(FormTwo),
    mode: 'onTouched',
  })

  const { handleSubmit } = twoForm

  const handleSubmitForm = (data: FormTwoSchema) => {
    setInitialValue([...initialValue, data])
    setScreenNumber('4')
  }

  return (
    <FormProvider {...twoForm}>
      <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <Title>Informações Básicas da sua Empresa</Title>
        <Field>
          <Label htmlFor="cnpj" text="Insira o CNPJ da empresa" />
          <Input type="text" name="cnpj" placeholder="**.***.***/0001-**" />
          <ErrorMessage name="cnpj" />
        </Field>
        <Field>
          <Label
            htmlFor="registrationMunicipal"
            text="Insira a Inscrição Municipal"
          />
          <Input
            type="text"
            name="registrationMunicipal"
            placeholder="***.***.***.***"
          />
          <ErrorMessage name="registrationMunicipal" />
        </Field>
        <Field>
          <Label
            htmlFor="registrationState"
            text="Insira a Inscrição Estadual"
          />
          <Input
            type="text"
            name="registrationState"
            placeholder="***.***.***.***"
          />
          <ErrorMessage name="registrationState" />
        </Field>
        <Field>
          <Label
            htmlFor="reasonCorporate"
            text="Insira as Informações Básicas"
          />
          <Input
            type="text"
            name="reasonCorporate"
            placeholder="Razão Social"
          />
          <Input type="text" name="nameFantasy" placeholder="Nome Fantasia" />
          <Input type="text" name="activity" placeholder="Ramo/Atividade" />
          <Input
            type="text"
            name="taxFramework"
            placeholder="Enquadramento Tributário"
          />
        </Field>
        <Field>
          <Label
            htmlFor="registeredCapital"
            text="Insira o Capital Social Registrado"
          />
          <Input
            type="text"
            name="registeredCapital"
            placeholder="R$ *.***.***,**"
          />
          <ErrorMessage name="registeredCapital" />
        </Field>
        <Button text="Avançar" icon={<ArrowSVG />} />
      </FormContainer>
    </FormProvider>
  )
}
