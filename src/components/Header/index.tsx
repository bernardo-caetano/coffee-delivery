import {
  Cart,
  HeaderContainer,
  HeaderContent,
  Localization,
  LocalizationCartContainer,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={Logo} alt="logo coffee delivery" />
        </Link>
        <LocalizationCartContainer>
          <Localization>
            <MapPin size={22} color="#4B2995" weight="fill" />
            <p>Rio de Janeiro, RJ</p>
          </Localization>
          <Cart background={'yellowLight'} href="/checkout">
            <ShoppingCart size={22} color={'#C47F17'} weight="fill" />
          </Cart>
        </LocalizationCartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
