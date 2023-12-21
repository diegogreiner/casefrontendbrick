import { useContext } from 'react'
import { AccordionContext } from '../context'
import { IconItemSVG } from './IconItemSVG'
import { ContainerIntern, Description, Item } from './Styles'

export const List = () => {
  const { theme } = useContext(AccordionContext)
  const data = ['Assunto 1', 'Assunto 2', 'Assunto 3', 'Assunto 4']

  return (
    <ContainerIntern>
      <Description>Assunto</Description>
      <ul>
        {data.map((item) => (
          <Item key={item}>
            {item}
            <IconItemSVG />
          </Item>
        ))}
      </ul>
    </ContainerIntern>
  )
}
