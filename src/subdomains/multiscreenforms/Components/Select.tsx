import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { ChevronDown } from './ChevronDown'

const InputSelected = styled.span<{ hasError: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:hover {
    cursor: pointer;
  }
`

const OptionStyled = styled.li`
  max-height: 60px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 8px 16px;
  max-width: 100%;
  list-style: none;
  background-color: #ffffff;

  &:first-child {
    border-radius: 12px 12px 0 0;
  }

  &:last-child {
    border-radius: 0 0 12px 12px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`

const Container = styled.div<{ optionsOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  ul {
    display: ${({ optionsOpen }) => (optionsOpen ? 'flex' : 'none')};
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-radius: 12px;
  }
`

type Props = {
  options: string[]
  name: string
  text: string
}

export const Select = ({ options, name, text }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [value, setValue] = useState('')

  const hasError = !!errors[name]?.message?.toString()

  const handleClickOption = (nameRegister: string, option: string) => {
    register(nameRegister, { value: option })
    setOptionsOpen(false)
    setValue(option)
  }

  return (
    <Container optionsOpen={optionsOpen}>
      <InputSelected
        id={name}
        hasError={hasError}
        onClick={() => setOptionsOpen(true)}
      >
        {value === '' ? text : value}
        {value === '' ? <ChevronDown /> : null}
      </InputSelected>
      <ul>
        {options.map((option) => (
          <OptionStyled
            key={option}
            onClick={() => handleClickOption(name, option)}
          >
            {option}
          </OptionStyled>
        ))}
      </ul>
    </Container>
  )
}
