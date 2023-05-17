import { Bank, CreditCard, Money } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem'
import { FormTitle } from './components/FormTitle'
import {
  AskContainer,
  CheckoutContainer,
  CoffeeListContent,
  CoffeeSelectedContainer,
  CoffeeSelectedContent,
  FormContainer,
  FormContent,
  Input,
  InputContainer,
  PaymentButton,
  PaymentContainer,
  PaymmentContent,
  Title,
  TotalInfo,
  TotalPriceContent,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react'

export function Checkout() {
  const { data } = useContext(CartContext)
  const [total, setTotal] = useState(
    data.cart.reduce((acc, item) => {
      acc += item.subtotal
      return acc
    }, 0),
  )

  useEffect(() => {
    const newTotal = data.cart.reduce((acc, item) => {
      acc += item.subtotal
      return acc
    }, 0)
    setTotal(newTotal)
  }, [data])

  return (
    <CheckoutContainer>
      <AskContainer>
        <Title>
          <h2>Complete seu pedido</h2>
        </Title>
        <FormContainer>
          <FormTitle
            icon="map"
            content={[
              'Endereço de Entrega',
              'Informe o endereço onde deseja receber seu pedido',
            ]}
          />
          <FormContent>
            <Input width="12.5rem" placeholder="CEP" required />
            <Input width="100%" placeholder="Rua" required />
            <InputContainer>
              <Input width="12.5rem" placeholder="Número" required />
              <Input width="100%" placeholder="Complemento" />
            </InputContainer>
            <InputContainer>
              <Input width="12.5rem" placeholder="Bairro" required />
              <Input width="100%" placeholder="Cidade" required />
              <Input width="3.75rem" placeholder="UF" required />
            </InputContainer>
          </FormContent>
        </FormContainer>
        <PaymentContainer>
          <FormTitle
            icon="dollar"
            content={[
              'Pagamento',
              'O pagamento é feito na entrega. Escolha a forma que deseja pagar',
            ]}
          />
          <PaymmentContent>
            <PaymentButton>
              <CreditCard color="#8047F8" size={16} />
              cartão de crédito
            </PaymentButton>
            <PaymentButton>
              <Bank color="#8047F8" size={16} />
              cartão de débito
            </PaymentButton>
            <PaymentButton>
              <Money color="#8047F8" size={16} />
              dinheiro
            </PaymentButton>
          </PaymmentContent>
        </PaymentContainer>
      </AskContainer>

      <CoffeeSelectedContainer>
        <Title>
          <h2>Cafés selecionados</h2>
        </Title>
        <CoffeeSelectedContent>
          <CoffeeListContent>
            {data.cart.map((order) => {
              return <CoffeeItem key={order.id} coffeeData={order} />
            })}
          </CoffeeListContent>
          <TotalPriceContent>
            <span>
              <p>Total de itens</p>{' '}
              <p>R$ {total.toFixed(2).replace('.', ',')}</p>
            </span>
            <span>
              <p>Entrega</p> <p>R$ 3,50</p>
            </span>
            <TotalInfo>
              <p>Total</p>{' '}
              <p>R$ {(total + 3.5).toFixed(2).replace('.', ',')}</p>
            </TotalInfo>
            <button type="button">CONFIRMAR PEDIDO</button>
          </TotalPriceContent>
        </CoffeeSelectedContent>
      </CoffeeSelectedContainer>
    </CheckoutContainer>
  )
}
