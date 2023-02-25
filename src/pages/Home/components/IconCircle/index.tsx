/* eslint-disable no-undef */
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconContainer, items } from './styles'

interface IconContainerProps {
  element: items
}

export function IconCircle({ element = 'cart' }: IconContainerProps) {
  switch (element) {
    case 'cart':
      return (
        <IconContainer element={element}>
          <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
        </IconContainer>
      )
    case 'box':
      return (
        <IconContainer element={element}>
          <Package size={16} color="#FFFFFF" weight="fill" />
        </IconContainer>
      )
    case 'timer':
      return (
        <IconContainer element={element}>
          <Timer size={16} color="#FFFFFF" weight="fill" />
        </IconContainer>
      )
    case 'coffee':
      return (
        <IconContainer element={element}>
          <Coffee size={16} color="#FFFFFF" weight="fill" />
        </IconContainer>
      )
  }
}
