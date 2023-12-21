import { useContext } from 'react'
import { ContainerIntern, Details } from './Styles'
import { ChevronDown } from './ChevronDown'
import { AccordionContext } from '../context'
import { ChevronUp } from './ChevronUp'

const ContainerDetails = () => {
  const { accordionOpen, setAccordionOpen } = useContext(AccordionContext)

  return (
    <ContainerIntern>
      <Details onClick={() => setAccordionOpen(!accordionOpen)}>
        {accordionOpen ? <ChevronDown /> : <ChevronUp />}
        Detalhamento do Processo
      </Details>
    </ContainerIntern>
  )
}

export default ContainerDetails
