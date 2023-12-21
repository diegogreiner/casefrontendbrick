import { ScreenOther } from '../Components/ScreenOther'
import { ScreenWelcome } from '../Components/ScreenWelcome'
import { SectionContainer } from '../../../shared/components/ui/MobileStyles'

export const MultiScrennFormInterface = () => {
  return (
    <SectionContainer>
      <ScreenWelcome />
      <ScreenOther />
    </SectionContainer>
  )
}
