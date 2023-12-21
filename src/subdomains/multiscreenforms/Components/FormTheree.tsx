import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormTwoSchema, FormThree } from '../schemas'
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
import { Select } from './Select'

export const FormThreeContainer = () => {
  const { setScreenNumber, setInitialValue, initialValue } = useContext(
    MultiscreenFormsContext,
  )

  const threeForm = useForm<FormTwoSchema>({
    resolver: zodResolver(FormThree),
    mode: 'onTouched',
  })

  const { handleSubmit } = threeForm

  const handleSubmitForm = (data: FormTwoSchema) => {
    setInitialValue([...initialValue, data])
    setScreenNumber('5')
  }

  return (
    <FormProvider {...threeForm}>
      <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <Title>Endereço da sua Empresa</Title>
        <Field>
          <Label htmlFor="cep" text="Insira o seu CEP" />
          <Input type="text" name="cep" placeholder="*****-***" />
          <ErrorMessage name="cep" />
        </Field>
        <Field>
          <Label htmlFor="address" text="Insira seu Endereço" />
          <Input type="text" name="address" placeholder="Nome da Rua" />
          <Input type="text" name="number" placeholder="Número" />
          <Input type="text" name="complement" placeholder="Complemento" />
        </Field>
        <Field>
          <Label htmlFor="city" text="Insira sua Cidade e Estado" />
          <Select options={['RS', 'SC']} name="state" text="Estado" />
          <Select
            options={['Porto Alegre', 'Florianópolis']}
            name="city"
            text="Cidade"
          />
        </Field>
        <Field>
          <Label
            htmlFor="timeOperating"
            text="Tempo de funcionamento neste local"
          />
          <Input type="text" name="timeOperating" placeholder="Tempo em anos" />
          <ErrorMessage name="timeOperating" />
        </Field>
        <Field>
          <Label htmlFor="ownHeadquarters" text="Sede Própria?" />
          <Select
            options={['Sim', 'Não']}
            name="ownHeadquarters"
            text="Selecione"
          />
          <ErrorMessage name="ownHeadquarters" />
        </Field>
        <Button text="Avançar" icon={<ArrowSVG />} />
      </FormContainer>
    </FormProvider>
  )
}
