import styled from 'styled-components'
import { HeaderMobile } from '../../../shared/components/ui/HeaderMobile'
import { LogoMobileSVG } from '../../../shared/components/ui/LogoMobileSVG'
import { ButtonNavBarSVG } from '../components/ButtonNavBarSVG'

const HeaderMobileContainer = styled(HeaderMobile)`
  position: relative;
  display: flex;
  align-items: center;

  svg:first-child {
    position: absolute;
    left: 16px;
    transform: translateY(-50%);
  }
`

export const Header = () => {
  return (
    <HeaderMobileContainer>
      <div>
        <ButtonNavBarSVG />
      </div>
      <LogoMobileSVG />
    </HeaderMobileContainer>
  )
}
