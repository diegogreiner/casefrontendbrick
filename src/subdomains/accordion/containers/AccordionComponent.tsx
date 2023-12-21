import { AccordionProvider } from '../context'
import { AccordionComponentInterface } from '../interfaces/AccordionComponent'

export const AccordionComponentContainer = () => {
  return (
    <AccordionProvider>
      <AccordionComponentInterface />
    </AccordionProvider>
  )
}
