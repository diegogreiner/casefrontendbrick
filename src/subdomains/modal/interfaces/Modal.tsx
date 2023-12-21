import { Button } from '../components/ButtonContact/Button'
import { Container } from '../components/Containers'
import { HeaderMobile } from '../../../shared/components/ui/HeaderMobile'
import { LogoMobileSVG } from '../../../shared/components/ui/LogoMobileSVG'
import { Modal } from '../components/Modal/Modal'

export const ModalInterface = () => {
  return (
    <>
      <HeaderMobile>
        <LogoMobileSVG />
      </HeaderMobile>
      <Container>
        <Button />
        <Modal />
      </Container>
    </>
  )
}
