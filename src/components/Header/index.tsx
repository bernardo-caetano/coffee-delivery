import {
  HeaderContainer,
  Localization,
  LocalizationCartContainer,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo coffee delivery" />
      <LocalizationCartContainer>
        <Localization>
          <MapPin size={22} color="#4B2995" weight="fill" />
          <p>Rio de Janeiro - RJ</p>
        </Localization>
      </LocalizationCartContainer>
    </HeaderContainer>
  )
}
