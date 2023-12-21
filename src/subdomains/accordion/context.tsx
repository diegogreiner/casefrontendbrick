import { ReactNode, createContext, useState } from 'react'

type InitialContext = {
  accordionOpen: boolean
  setAccordionOpen: (accordionOpen: boolean) => void
  theme: string
  setTheme: (theme: string) => void
  isCustoms: boolean
  setIsCustoms: (isCustoms: boolean) => void
}

export const initialContext: InitialContext = {
  accordionOpen: false,
  setAccordionOpen: () => {},
  theme: 'light',
  setTheme: () => {},
  isCustoms: true,
  setIsCustoms: () => {},
}

export const AccordionContext = createContext<InitialContext>(initialContext)

type Props = {
  children: ReactNode
}

export const AccordionProvider = ({ children }: Props) => {
  const [accordionOpen, setAccordionOpen] = useState(
    initialContext.accordionOpen,
  )
  const [theme, setTheme] = useState(initialContext.theme)
  const [isCustoms, setIsCustoms] = useState(initialContext.isCustoms)

  return (
    <AccordionContext.Provider
      value={{
        accordionOpen,
        setAccordionOpen,
        theme,
        setTheme,
        isCustoms,
        setIsCustoms,
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}
