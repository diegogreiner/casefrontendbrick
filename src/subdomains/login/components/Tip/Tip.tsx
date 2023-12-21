import {
  TipContainer,
  TipContainerTitle,
  TipDescription,
  TipTitle,
} from './Styles'
import { TipSVG } from './TipSVG'

export const Tip = () => {
  return (
    <TipContainer>
      <TipContainerTitle>
        <TipSVG />
        <TipTitle>Dica de Segurança Brick</TipTitle>
      </TipContainerTitle>
      <TipDescription>
        Não é necessário compartilhar sua conta, sua locadora tem direito a mais
        acessos. Crie novos acessos e gerencie permissões no painel de
        configurações.
      </TipDescription>
    </TipContainer>
  )
}
