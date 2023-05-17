import { Bank, CreditCard, Money } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem'
import { FormTitle } from './components/FormTitle'
import { useNavigate } from 'react-router-dom'
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
  const { data, setDataPopulate } = useContext(CartContext)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [total, setTotal] = useState(
    data.cart.reduce((acc, item) => {
      acc += item.subtotal
      return acc
    }, 0),
  )
  const [deliveryData, setDeliveryData] = useState({
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighbor: '',
      city: '',
      uf: '',
    },
    payment: null,
  })
  const navigate = useNavigate()
  const errorMessage =
    'Preencha todos os campos do formulário e escolha uma forma de pagamento.'

  function updateDeliveryData(e: any) {
    const deliveryDataUpdater = { ...deliveryData }
    switch (e.target.name) {
      case 'cep':
        deliveryDataUpdater.address.cep = e.target.value
        break
      case 'street':
        deliveryDataUpdater.address.street = e.target.value
        break
      case 'number':
        deliveryDataUpdater.address.number = e.target.value
        break
      case 'complement':
        deliveryDataUpdater.address.complement = e.target.value
        break
      case 'neighbor':
        deliveryDataUpdater.address.neighbor = e.target.value
        break
      case 'city':
        deliveryDataUpdater.address.city = e.target.value
        break
      case 'uf':
        deliveryDataUpdater.address.uf = e.target.value
        break
      case 'credit':
        deliveryDataUpdater.payment = e.target.name
        break
      case 'debit':
        deliveryDataUpdater.payment = e.target.name
        break
      case 'money':
        deliveryDataUpdater.payment = e.target.name
        break
      default:
        console.log('Error: input not found.')
        break
    }
    setDeliveryData(deliveryDataUpdater)
  }

  function submitOrder() {
    const dataUpdater = { ...data }

    if (
      deliveryData.address.cep !== '' &&
      deliveryData.address.street !== '' &&
      deliveryData.address.number !== '' &&
      deliveryData.address.neighbor !== '' &&
      deliveryData.address.city !== '' &&
      deliveryData.address.uf !== '' &&
      deliveryData.payment !== null
    ) {
      dataUpdater.address = deliveryData.address
      dataUpdater.payment = deliveryData.payment
      dataUpdater.total = total

      setDataPopulate(dataUpdater)
      navigate('/checkout/success')
    } else {
      setShowErrorMessage(!showErrorMessage)
    }
  }

  useEffect(() => {
    const newTotal = data.cart.reduce((acc, item) => {
      acc += item.subtotal
      return acc
    }, 0)
    setTotal(newTotal)
  }, [data])

  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => setShowErrorMessage(!showErrorMessage), 2000)
    }
  }, [showErrorMessage])
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
            <Input
              width="12.5rem"
              placeholder="CEP"
              required
              type="number"
              name="cep"
              onChange={(e) => updateDeliveryData(e)}
            />
            <Input
              width="100%"
              placeholder="Rua"
              required
              type="text"
              name="street"
              onChange={(e) => updateDeliveryData(e)}
            />
            <InputContainer>
              <Input
                name="number"
                width="12.5rem"
                placeholder="Número"
                required
                type="number"
                onChange={(e) => updateDeliveryData(e)}
              />
              <Input
                width="100%"
                placeholder="Complemento"
                type="text"
                name="complement"
                onChange={(e) => updateDeliveryData(e)}
              />
            </InputContainer>
            <InputContainer>
              <Input
                name="neighbor"
                width="12.5rem"
                placeholder="Bairro"
                required
                type="text"
                onChange={(e) => updateDeliveryData(e)}
              />
              <Input
                width="100%"
                placeholder="Cidade"
                required
                type="text"
                name="city"
                onChange={(e) => updateDeliveryData(e)}
              />
              <Input
                width="3.75rem"
                placeholder="UF"
                required
                type="text"
                name="uf"
                onChange={(e) => updateDeliveryData(e)}
              />
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
            <PaymentButton
              name="credit"
              onClick={(e) => updateDeliveryData(e)}
              style={{
                border:
                  deliveryData.payment === 'credit'
                    ? `1px solid #4B2995`
                    : `1px solid #E6E5E5`,
                background:
                  deliveryData.payment === 'credit' ? `#EBE5F9` : `#E6E5E5`,
              }}
            >
              <CreditCard color="#8047F8" size={16} />
              cartão de crédito
            </PaymentButton>
            <PaymentButton
              name="debit"
              onClick={(e) => updateDeliveryData(e)}
              style={{
                border:
                  deliveryData.payment === 'debit'
                    ? `1px solid #4B2995`
                    : `1px solid #E6E5E5`,
                background:
                  deliveryData.payment === 'debit' ? `#EBE5F9` : `#E6E5E5`,
              }}
            >
              <Bank color="#8047F8" size={16} />
              cartão de débito
            </PaymentButton>
            <PaymentButton
              name="money"
              onClick={(e) => updateDeliveryData(e)}
              style={{
                border:
                  deliveryData.payment === 'money'
                    ? `1px solid #4B2995`
                    : `1px solid #E6E5E5`,
                background:
                  deliveryData.payment === 'money' ? `#EBE5F9` : `#E6E5E5`,
              }}
            >
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
              <p>Total de itens</p>
              <p>R$ {total.toFixed(2).replace('.', ',')}</p>
            </span>
            <span>
              <p>Entrega</p> <p>R$ 3,50</p>
            </span>
            <TotalInfo>
              <p>Total</p>
              <p>R$ {(total + 3.5).toFixed(2).replace('.', ',')}</p>
            </TotalInfo>
            <button type="button" onClick={() => submitOrder()}>
              CONFIRMAR PEDIDO
            </button>
            {showErrorMessage ? (
              <span
                style={{
                  color: 'red',
                  fontSize: '0.75rem',
                  textAlign: 'center',
                }}
              >
                {errorMessage}
              </span>
            ) : (
              ''
            )}
          </TotalPriceContent>
        </CoffeeSelectedContent>
      </CoffeeSelectedContainer>
    </CheckoutContainer>
  )
}
