import { DeliveryInfo, SuccessContainer, SuccessContent, Title } from './styles'
import menMotocycle from '../../assets/images/men-motocycle-checkout.svg'
import { Info } from './components/Info'
export function Success() {
  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <SuccessContent>
        <DeliveryInfo>
          <Info typeIcon="map" street="Rua João Daniel Martinelli, 102" />
          <Info typeIcon="timer" />
          <Info typeIcon="dollar" payment="Cartão de Crédito" />
        </DeliveryInfo>
        <img
          src={menMotocycle}
          alt="homem dirigindo uma moto com um pacote na garupa"
        />
      </SuccessContent>
    </SuccessContainer>
  )
}
