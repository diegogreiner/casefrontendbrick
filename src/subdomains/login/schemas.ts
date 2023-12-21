import { z } from 'zod'

// Schema de validação
export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Email invalido')
    .transform((email) => {
      console.log(email)
      const newEmail = email.split('@')
      newEmail[1] = newEmail[1].toLocaleLowerCase()
      return newEmail.join('@')
    }),
  password: z.string().trim().min(8, 'Senha incorreta'),
})

export type LoginSchemaData = z.infer<typeof LoginSchema>

// Schema de criação do usuário
export const FirstLoginSchema = z
  .object({
    name: z.string().trim().min(1, 'O nome é obrigatório'),
    password: z
      .string()
      .trim()
      .min(8, 'A senha deve ter pelo menos 8 caracteres'),
    confirmPassword: z
      .string()
      .trim()
      .min(8, 'A senha deve ter pelo menos 8 caracteres'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    const contentCharactersSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const contentCharactersSpecialConfirm = /[!@#$%^&*(),.?":{}|<>]/.test(
      confirmPassword,
    )

    if (!contentCharactersSpecial && !contentCharactersSpecialConfirm) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'A senha não possui no mínimo 1 caracter especial',
      })
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'A senha não possui no mínimo 1 caracter especial',
      })
    }

    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'As senhas devem ser iguais',
      })
    }
  })

export type FirstLoginSchemaData = z.infer<typeof FirstLoginSchema>
