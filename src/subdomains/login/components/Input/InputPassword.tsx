import { InputHTMLAttributes, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { VisibilityOff } from '../VisibilityOffSVG'
import { VisibilityOn } from '../VisibilityOnSVG'
import { InputContainerStyled, InputStyled } from './Styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const InputPassword = ({ name, placeholder }: Props) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext()

  const [isVisible, setIsVisible] = useState(false)
  const hasError: boolean = !!errors[name]?.message?.toString()
  const password = getValues('password')
  const confirmPassword = getValues('confirmPassword')
  const isCorrect = password && confirmPassword && password === confirmPassword

  const toogleVisibility = (visibility: boolean) => {
    setIsVisible(visibility)
  }

  return (
    <InputContainerStyled>
      <InputStyled
        id={name}
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(name)}
        hasError={hasError}
        password={isCorrect}
      />
      {isVisible ? (
        <VisibilityOn
          toogleVisibility={toogleVisibility}
          color={hasError ? '#D95757' : password ? '#268738' : '#1a202c'}
        />
      ) : (
        <VisibilityOff
          toogleVisibility={toogleVisibility}
          color={hasError ? '#D95757' : password ? '#268738' : '#1a202c'}
        />
      )}
    </InputContainerStyled>
  )
}
