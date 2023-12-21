import { useContext } from 'react'
import { ModalContext } from '../../../../shared/ModalContext'
import {
  Container,
  ContainerButtons,
  ContainerDescription,
  ContainerTitle,
  ModalContainer,
} from '../../../../shared/components/ui/ModalStyles'
import { CloseSVG } from '../../../../shared/components/ui/CloseSVG'

export const Modal = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext)

  const handleClick = (contact: string) => {
    setModalOpen(false)
    alert(`Você escolheu entrar em contato pelo ${contact}`)
  }

  return (
    <>
      {modalOpen && (
        <Container>
          <ModalContainer>
            <ContainerTitle>
              <h3>Entre em contato com a Brick</h3>
              <CloseSVG />
            </ContainerTitle>
            <ContainerDescription>
              <p>
                Você pode entrar em contato com a brick via e-mail ou WhatsApp.
              </p>
            </ContainerDescription>
            <ContainerButtons>
              <button type="submit" onClick={() => handleClick('E-mail')}>
                Enviar e-mail
              </button>
              <button type="submit" onClick={() => handleClick('WhatsApp')}>
                Mensagem pelo WhatsApp
              </button>
            </ContainerButtons>
          </ModalContainer>
        </Container>
      )}
    </>
  )
}
