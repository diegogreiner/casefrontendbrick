import { ReactNode, createContext, useState } from 'react'

type InitialContext = {
  initialValue: Record<string, string>[]
  setInitialValue: (initialValue: Record<string, string>[]) => void
  screenNumber: string
  setScreenNumber: (screenNumber: string) => void
}

const initialContext: InitialContext = {
  initialValue: [],
  setInitialValue: () => {},
  screenNumber: '1',
  setScreenNumber: () => {},
}

export const MultiscreenFormsContext = createContext(initialContext)

type Props = {
  children: ReactNode
}

export const MultiScreenFormsProvider = ({ children }: Props) => {
  const [initialValue, setInitialValue] = useState(initialContext.initialValue)
  const [screenNumber, setScreenNumber] = useState(initialContext.screenNumber)

  return (
    <MultiscreenFormsContext.Provider
      value={{ initialValue, setInitialValue, screenNumber, setScreenNumber }}
    >
      {children}
    </MultiscreenFormsContext.Provider>
  )
}
