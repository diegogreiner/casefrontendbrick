import { ThemeProvider } from 'styled-components'
import { LoginProviderCtx } from '../context'
import { LoginInterface } from '../Interfaces/Login'
import { FirstLoginInterface } from '../Interfaces/FirstLogin'
import { themeInput } from '../theme'

export const LoginContainer = () => {
  return (
    <LoginProviderCtx>
      <ThemeProvider theme={themeInput}>
        <LoginInterface />
        <FirstLoginInterface />
      </ThemeProvider>
    </LoginProviderCtx>
  )
}
