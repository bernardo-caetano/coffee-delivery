import styled from 'styled-components'

export type cartButtonTypes = {
    // color: '#FFFFFF' | '#C47F17',
    background: 'purpleDark' | 'yellowLight',
}

interface CartProps {
    // color: cartButtonTypes['color'];
    background: cartButtonTypes['background'],
}

const cartColors = {
    yellowLight: '#F1E9C9',
    purpleDark: '#4B2995',
}

export const Cart = styled.button<CartProps>`
  border-radius: 6px;
  padding: 0.5rem;

  ${props => {
    return `background: ${cartColors[props.background]}`
  }}
`

