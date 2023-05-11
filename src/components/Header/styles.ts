import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
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
