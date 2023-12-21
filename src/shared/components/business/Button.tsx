import { ReactNode, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

type Props = {
  text: string
  icon?: ReactNode
}

const ButtonStyled = styled.button<{ disabled: boolean }>`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 12px;
  padding: 18px 24px;
  color: #fff;
  background-color: #ff3300;
  border: none;
  cursor: pointer;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }
`

export const Button = ({ text, icon }: Props) => {
  const { getValues, register } = useFormContext()
  const [allFieldsHaveContent, setAllFieldsHaveContent] = useState(false)

  useEffect(() => {
    const checkFields = () => {
      const allFieldsFilled = Object.values(getValues()).every(
        (value) => typeof value === 'string' && value.length > 0,
      )
      setAllFieldsHaveContent(allFieldsFilled)
    }

    Object.keys(getValues()).forEach((fieldName) => {
      register(fieldName, {
        onChange: () => {
          checkFields()
        },
      })
    })

    checkFields()
  }, [getValues, register])

  return (
    <ButtonStyled disabled={!allFieldsHaveContent}>
      {text}
      {icon}
    </ButtonStyled>
  )
}
