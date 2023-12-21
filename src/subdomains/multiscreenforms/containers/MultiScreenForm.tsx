import { ThemeProvider } from 'styled-components'
import { MultiScreenFormsProvider } from '../contexts'
import { MultiScrennFormInterface } from '../interfaces/MultiScreenForm'
import { themeInput } from '../theme'

export const MultiScreenFormContainer = () => {
  return (
    <MultiScreenFormsProvider>
      <ThemeProvider theme={themeInput}>
        <MultiScrennFormInterface />
      </ThemeProvider>
    </MultiScreenFormsProvider>
  )
}
