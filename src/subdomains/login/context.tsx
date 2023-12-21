import { ReactNode, createContext, useState } from 'react'

export type InitialContext = {
  page: 'login' | 'firstLogin'
  setPage: (page: 'login' | 'firstLogin') => void
}

export const initialContext: InitialContext = {
  page: 'login',
  setPage: () => {},
}

export const LoginContext = createContext<InitialContext>(initialContext)

type Props = {
  children: ReactNode
}

export const LoginProviderCtx = ({ children }: Props) => {
  const [page, setPage] = useState(initialContext.page)

  return (
    <LoginContext.Provider value={{ page, setPage }}>
      {children}
    </LoginContext.Provider>
  )
}
