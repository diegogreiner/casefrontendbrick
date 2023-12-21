import { ModalProvider } from '../../../shared/ModalContext'
import { ModalInterface } from '../interfaces/Modal'

export const ModalContainer = () => {
  return (
    <ModalProvider>
      <ModalInterface />
    </ModalProvider>
  )
}
