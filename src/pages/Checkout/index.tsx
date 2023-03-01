import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { AskContainer, CheckoutContainer, CoffeeSelectedContainer, CoffeeSelectedContent, FormContainer, FormTitle, IconContainer, InfoContent, PaymentContainer, Title } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AskContainer>
        <Title><h2>Complete seu pedido</h2></Title>
        <FormContainer>
          <FormTitle>
            <IconContainer>
              <MapPinLine color='#C47F17' size={22}/>
            </IconContainer>
            <InfoContent>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </InfoContent>
          </FormTitle>
        </FormContainer>
        <PaymentContainer>
        <FormTitle>
            <IconContainer>
              <CurrencyDollar color='#8047F8' size={22}/>
            </IconContainer>
            <InfoContent>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </InfoContent>
          </FormTitle>
        </PaymentContainer>
      </AskContainer>

      <CoffeeSelectedContainer>
        <Title><h2>Cafés selecionados</h2></Title>
        <CoffeeSelectedContent></CoffeeSelectedContent>
      </CoffeeSelectedContainer>
      
      
    </CheckoutContainer>
  )
}
