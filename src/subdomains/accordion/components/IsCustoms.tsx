import styled from 'styled-components'
import { useContext } from 'react'
import { ContainerIntern, Description } from './Styles'
import { AccordionContext } from '../context'

const Button = styled.button<{ isCustoms: boolean }>`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 12px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  background-color: ${({ theme, isCustoms }) =>
    isCustoms ? theme.bgButtonCustomsActive : theme.bgButtonCustomsDisabled};
  color: ${({ theme, isCustoms }) =>
    isCustoms
      ? theme.colorButtonCustomsActive
      : theme.colorButtonCustomsDisabled};
  border: ${({ theme, isCustoms }) =>
    isCustoms ? `2px solid ${theme.borderButtonCustomsActive}` : 'none'};
`

export const IsCustoms = () => {
  const { isCustoms, setIsCustoms } = useContext(AccordionContext)

  return (
    <ContainerIntern>
      <Description>É um Processo Aduaneiro?</Description>
      <Button isCustoms={isCustoms} onClick={() => setIsCustoms(!isCustoms)}>
        Sim
      </Button>
    </ContainerIntern>
  )
}
