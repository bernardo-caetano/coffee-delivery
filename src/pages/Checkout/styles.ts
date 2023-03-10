import styled from 'styled-components'

interface InputProps {
  width: string;
}

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

export const FormContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
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

export const PaymentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2.5rem;
  width: 40rem;
  height: 12.9375rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  flex-direction: column;
`
export const CoffeeSelectedContainer = styled(BaseContainer)`
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const CoffeeSelectedContent = styled(BaseContainer)`
  padding: 2.5rem;
  width: 28rem;
  min-height: 23.125rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
  flex-direction: column;
`
export const FormContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`

export const InputContainer = styled(BaseContainer)`
  width: 100%;
  gap: 0.75rem;
`
export const Input = styled.input<InputProps>`
  width: ${props => props.width};
  height: 2.625rem;
  padding: 0.75rem;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  line-height: 130%;
  color:  ${props => props.theme['base-text']};

  &:focus {
    border-color: ${props => props.theme['yellow-dark']};
  }
`
export const PaymmentContent = styled(BaseContainer)`
  width: 100%;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const PaymentButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.17rem;
  height: 3.1875rem;
  background: ${props => props.theme['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};

  &:focus {
    border: 1px solid ${props => props.theme.purple};
    background: ${props => props.theme['purple-ligth']};
  }
`

export const CoffeeListContent = styled(BaseContainer)`
  flex-direction: column;
  width: 100%;
`
export const TotalPriceContent = styled(BaseContainer)`
  flex-direction: column;
  width: 100%;
  gap: 0.75rem 0;

  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   

      p{
        font-size: 0.875rem;
        line-height: 130%;
        color: ${props => props.theme['base-text']};
        
      }
  }

  button {
    margin-top: 0.75rem;
    padding: 0.75rem 7.34375rem;
    background: ${props => props.theme.yellow};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${props => props.theme.white};;
    font-stretch: 100;
  }

`

export const TotalInfo = styled.span`

p{
  font-weight: 700;
  font-size: 1.25rem !important;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']} !important;
}
`