import { z } from 'zod'

export const FormOne = z.object({
  fullName: z.string().trim().min(1, 'Preencha o campo'),
  cpf: z.string().min(1, 'Preencha o campo'),
  cnh: z.string().min(1, 'Preencha o campo'),
  dateBirth: z.string().min(1, 'Preencha o campo'),
  dateFirstCnh: z.string().min(1, 'Preencha o campo'),
  validityCnh: z.string().min(1, 'Preencha o campo'),
})

export type FormOneSchema = z.infer<typeof FormOne>

export const FormTwo = z.object({
  cnpj: z.string().min(1, 'Preencha o campo'),
  registrationMunicipal: z.string().min(1, 'Preencha o campo'),
  registrationState: z.string().min(1, 'Preencha o campo'),
  reasonCorporate: z.string().min(1, 'Preencha o campo'),
  nameFantasy: z.string().min(1, 'Preencha o campo'),
  activity: z.string().min(1, 'Preencha o campo'),
  taxFramework: z.string().min(1, 'Preencha o campo'),
  registeredCapital: z.string().min(1, 'Preencha o campo'),
})

export type FormTwoSchema = z.infer<typeof FormTwo>

export const FormThree = z.object({
  cep: z.string().min(1, 'Preencha o campo'),
  address: z.string().min(1, 'Preencha o campo'),
  number: z.string().min(1, 'Preencha o campo'),
  complement: z.string().min(1, 'Preencha o campo'),
  state: z.string().min(1, 'Preencha o campo'),
  city: z.string().min(1, 'Preencha o campo'),
  timeOperating: z.string().min(1, 'Preencha o campo'),
  ownHeadquarters: z.string().min(1, 'Preencha o campo'),
})

export type FormThreeSchema = z.infer<typeof FormThree>

export const FormFour = z.object({
  email: z.string().min(1, 'Preencha o campo'),
  phoneCompany: z.string().min(1, 'Preencha o campo'),
  phoneCellCompany: z.string().min(1, 'Preencha o campo'),
})

export type FormFourSchema = z.infer<typeof FormFour>
