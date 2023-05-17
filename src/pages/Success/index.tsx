import { DeliveryInfo, SuccessContainer, SuccessContent, Title } from './styles'
import menMotocycle from '../../assets/images/men-motocycle-checkout.svg'
import { Info } from './components/Info'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Success() {
  const { data, setDataPopulate } = useContext(CartContext)
  const localPageData = { ...data }
  const [paymentType, setPaymentType] = useState<
    'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro' | ''
  >('')

  function paymentName() {
    switch (localPageData.payment) {
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
  console.log(localPageData)
  useEffect(() => {
    setPaymentType(() => paymentName()!)
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
  }, [])
  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <SuccessContent>
        <DeliveryInfo>
          <Info
            typeIcon="map"
            street={`${localPageData.address.street}, ${localPageData.address.number}`}
          />
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
