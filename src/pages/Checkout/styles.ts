import styled from 'styled-components'

const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  max-width: 70rem;

`

export const AskContainer = styled(BaseContainer)`
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.25rem;
  width: 100%;

  h2 {
    align-self: flex-start;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const FormContainer = styled(BaseContainer)`
    padding: 2.5rem;
    width: 40rem;
    height: 23.25rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const PaymentContainer = styled(BaseContainer)`
  padding: 2.5rem;
  width: 40rem;
  height: 12.9375rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
export const CoffeeSelectedContainer = styled(BaseContainer)`
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const CoffeeSelectedContent = styled(BaseContainer)`
  padding: 2.5rem;
  width: 28rem;
  height: 23.125rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
`

