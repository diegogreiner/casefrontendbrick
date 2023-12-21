import { AccordionProvider } from '../context'
import { AccordionThemeInterface } from '../interfaces/AccordionTheme'

export const AccordionThemeContainer = () => {
  return (
    <AccordionProvider>
      <AccordionThemeInterface />
    </AccordionProvider>
  )
}
