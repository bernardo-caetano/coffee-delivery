import { DeliveryInfo, SuccessContainer, SuccessContent, Title } from './styles'
import menMotocycle from '../../assets/images/men-motocycle-checkout.svg'
import { Info } from './components/Info'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Success() {
  const { data, setDataPopulate } = useContext(CartContext)
  const [address, setAddress] = useState<string>('')
  const [paymentType, setPaymentType] = useState<
    'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro' | ''
  >('')

  function paymentName() {
    switch (data.payment) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'
      default:
        console.log('Error: Invalid payment.')
        break
    }
  }

  useEffect(() => {
    if (!!data.payment && !!data.address.street && !!data.address.number) {
      setPaymentType(() => paymentName()!)
      setAddress(`${data.address.street}, ${data.address.number}`)
      setDataPopulate({
        cart: [],
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

        total: 0,
      })
      localStorage.clear()
    }
  }, [data])
  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <SuccessContent>
        <DeliveryInfo>
          <Info typeIcon="map" street={address} />
          <Info typeIcon="timer" />
          <Info typeIcon="dollar" payment={paymentType} />
        </DeliveryInfo>
        <img
          src={menMotocycle}
          alt="homem dirigindo uma moto com um pacote na garupa"
        />
      </SuccessContent>
    </SuccessContainer>
  )
}
