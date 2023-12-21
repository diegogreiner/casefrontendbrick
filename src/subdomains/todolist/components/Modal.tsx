import { useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '../../../shared/ModalContext'
import {
  Container,
  ContainerDescription,
  ContainerTitle,
  ModalContainer,
} from '../../../shared/components/ui/ModalStyles'
import { CloseSVG } from '../../../shared/components/ui/CloseSVG'
import { TodoListContext } from '../context'

const ModalContainerStyled = styled(ModalContainer)`
  min-width: 500px;
`

const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;

  button {
    width: 100%;
    border-radius: 12px;
    padding: 18px 0px;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:first-child {
    background-color: ${({ theme }) => theme.bgColorButton};
  }

  button:last-child {
    background-color: ${({ theme }) => theme.bgColorButtonRemove};
  }
`

type Props = {
  id: number
}

export const Modal = ({ id }: Props) => {
  const { modalOpen, setModalOpen } = useContext(ModalContext)
  const { removeTaskFunction } = useContext(TodoListContext)

  const removeTask = () => {
    removeTaskFunction(id)
    setModalOpen(false)
  }

  return (
    <>
      {modalOpen && (
        <Container>
          <ModalContainerStyled>
            <ContainerTitle>
              <h3>Excluir serviço</h3>
              <CloseSVG />
            </ContainerTitle>
            <ContainerDescription>
              <p>Esse serviço será permanentemente excluído</p>
            </ContainerDescription>
            <ContainerButtons>
              <button type="submit" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
              <button type="submit" onClick={removeTask}>
                Excluir
              </button>
            </ContainerButtons>
          </ModalContainerStyled>
        </Container>
      )}
    </>
  )
}
