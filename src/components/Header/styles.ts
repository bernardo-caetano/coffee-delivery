import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.background};
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }
`
export const LocalizationCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const Localization = styled.span`
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  p {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
`

export type cartButtonTypes = {
  color: '#FFFFFF' | '#C47F17'
  background: 'purpleDark' | 'yellowLight'
}

interface CartProps {
  background: cartButtonTypes['background']
}

const cartColors = {
  yellowLight: '#F1E9C9',
  purpleDark: '#4B2995',
}

export const Cart = styled.a<CartProps>`
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    return `background: ${cartColors[props.background]}`
  }}
`
export const CircleCartItemsCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme['purple-dark']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: white;
  margin: -0.5rem 0 0 -0.5rem;
`

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
