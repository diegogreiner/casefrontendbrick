import { LabelHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string
}

const LabelStyled = styled.label`
  padding-left: 16px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  min-width: 100%;
  display: flex;
`

export const Label = ({ text, htmlFor }: Props) => {
  return <LabelStyled htmlFor={htmlFor}>{text}</LabelStyled>
}
