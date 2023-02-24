import {
  Cart,
  HeaderContainer,
  Localization,
  LocalizationCartContainer,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo coffee delivery" />
      <LocalizationCartContainer>
        <Localization>
          <MapPin size={22} color="#4B2995" weight="fill" />
          <p>Rio de Janeiro, RJ</p>
        </Localization>
        <Cart>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </Cart>
      </LocalizationCartContainer>
    </HeaderContainer>
  )
}
