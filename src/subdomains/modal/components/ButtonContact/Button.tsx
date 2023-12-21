import { useContext } from 'react'
import { PhoneSVG } from './PhoneSVG'
import { ButtonContact, Text } from './Styles'
import { ModalContext } from '../../../../shared/ModalContext'

export const Button = () => {
  const { setModalOpen } = useContext(ModalContext)
  const handleClick = () => {
    setModalOpen(true)
  }

  return (
    <ButtonContact onClick={handleClick}>
      <PhoneSVG />
      <Text>Entre em contato</Text>
    </ButtonContact>
  )
}
