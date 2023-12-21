import { ReactNode, createContext, useState } from 'react'

type InitialContext = {
  modalOpen: boolean
  setModalOpen: (modalOpen: boolean) => void
}

export const initialContext: InitialContext = {
  modalOpen: false,
  setModalOpen: (modalOpen: boolean) => {},
}

export const ModalContext = createContext<InitialContext>(initialContext)

type Props = {
  children: ReactNode
}

export const ModalProvider = ({ children }: Props) => {
  const [modalOpen, setModalOpen] = useState(initialContext.modalOpen)

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
