import styled from 'styled-components'

export type cartButtonTypes = {
    color: '#FFFFFF' | '#C47F17',
    background: 'purpleDark' | 'yellowLight',
}

interface CartProps {
    background: cartButtonTypes['background'],
}

const cartColors = {
    yellowLight: '#F1E9C9',
    purpleDark: '#4B2995',
}

export const Cart = styled.button<CartProps>`
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;
  border: none;
  cursor: pointer;

  ${props => {
    return `background: ${cartColors[props.background]}`
  }}
`

