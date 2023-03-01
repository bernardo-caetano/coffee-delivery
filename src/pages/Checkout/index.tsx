import { FormTitle } from './components/FormTitle'
import { AskContainer, CheckoutContainer, CoffeeSelectedContainer, CoffeeSelectedContent, FormContainer, PaymentContainer, Title } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AskContainer>
        
        <Title><h2>Complete seu pedido</h2></Title>
        <FormContainer>
         <FormTitle icon='map' content={['Endereço de Entrega','Informe o endereço onde deseja receber seu pedido']}/>
        </FormContainer>
        <PaymentContainer>
          <FormTitle icon='dollar' content={['Pagamento','O pagamento é feito na entrega. Escolha a forma que deseja pagar']}/>
        </PaymentContainer>
      </AskContainer>

      <CoffeeSelectedContainer>
        <Title><h2>Cafés selecionados</h2></Title>
        <CoffeeSelectedContent></CoffeeSelectedContent>
      </CoffeeSelectedContainer>
      
      
    </CheckoutContainer>
  )
}
