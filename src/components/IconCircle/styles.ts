import styled from 'styled-components'

export type items = 'cart' | 'box' | 'timer' | 'coffee' | 'map' | 'dollar'

interface IconContainerProps {
  element: items
}

const iconContainerVariants = {
  cart: '#C47F17',
  box: '#574F4D',
  timer: '#DBAC2C',
  coffee: '#8047F8',
  map: '#8047F8',
  dollar: '#C47F17',
}

export const IconContainer = styled.span<IconContainerProps>`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    return `background: ${iconContainerVariants[props.element]}`
  }}
`
