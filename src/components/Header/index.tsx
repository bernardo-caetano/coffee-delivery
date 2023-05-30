import {
  Cart,
  CartWrapper,
  CircleCartItemsCounter,
  HeaderContainer,
  HeaderContent,
  Localization,
  LocalizationCartContainer,
} from './styles'
import Logo from '../../assets/images/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { data } = useContext(CartContext)
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
          <CartWrapper>
            <Cart background={'yellowLight'} href="/checkout">
              <ShoppingCart size={22} color={'#C47F17'} weight="fill" />
            </Cart>
            {data.cart.length > 0 ? (
              <CircleCartItemsCounter>
                {data.cart.length}
              </CircleCartItemsCounter>
            ) : (
              ''
            )}
          </CartWrapper>
        </LocalizationCartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
