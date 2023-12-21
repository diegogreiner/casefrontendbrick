import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type: string
}

const InputStyled = styled.input<{ hasError: boolean }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 8px 16px;
  border-radius: 12px;
  max-width: 100%;

  border: ${({ hasError, theme }) =>
    hasError ? `2px solid ${theme.colorError}` : 'none'};
  color: ${({ hasError, theme }) =>
    hasError ? theme.colorError : theme.colorBlack};
  background-color: ${({ hasError, theme }) =>
    hasError ? theme.bgColorError : theme.bgColor};

  &::placeholder {
    color: ${({ hasError, theme }) =>
      hasError ? theme.colorError : theme.placeholderColor};
  }

  &:focus {
    outline: none;
    border: ${({ hasError, theme }) =>
      hasError ? `2px solid ${theme.colorError}` : `2px solid ${theme.border}`};
  }
`

export const Input = ({ name, type, placeholder }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const hasError: boolean = !!errors[name]?.message?.toString()

  return (
    <InputStyled
      id={name}
      type={type}
      placeholder={placeholder}
      {...register(name)}
      hasError={hasError}
    />
  )
}
