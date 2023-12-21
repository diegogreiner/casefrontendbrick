import { useContext } from 'react'
import { AccordionContext } from '../context'
import {
  ItemDetailsContainer,
  Description,
  DetailsOpenContainer,
  Item,
  ItemDetails,
} from './Styles'

export const OpenDetails = () => {
  const { accordionOpen } = useContext(AccordionContext)

  return (
    <>
      {accordionOpen && (
        <DetailsOpenContainer>
          <ItemDetailsContainer>
            <ItemDetails>
              <Description>Data de expedição</Description>
              <Item>19/12/2022</Item>
            </ItemDetails>
            <ItemDetails>
              <Description>Status</Description>
              <Item>EM ANDAMENTO</Item>
            </ItemDetails>
          </ItemDetailsContainer>
          <div>
            <Description>N° do Processo</Description>
            <Item>15344507720228260617</Item>
          </div>
          <div>
            <ItemDetailsContainer>
              <ItemDetails>
                <Description>Órgão de Destino</Description>
                <Item>SER DA DIVIDA ATIVA DA UNIAO-PFN-PR</Item>
              </ItemDetails>
              <ItemDetails>
                <Description>Órgão de Origem</Description>
                <Item>PROTOCOLO GERAL DA SAMF-PR</Item>
              </ItemDetails>
            </ItemDetailsContainer>
          </div>
        </DetailsOpenContainer>
      )}
    </>
  )
}
