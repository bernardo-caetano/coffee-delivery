import styled from 'styled-components'

export const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CoffeeCardContainer = styled(BaseContainer)`
  
`
export const CoffeeCardContent = styled(BaseContainer)``

export const ColumnContainer = styled(BaseContainer)`
  flex-direction: column;
`

export const Flag = styled.span`
  background-image: ${props => props.theme['yellor-light']};
  color: ${props => props.theme['yellor-dark']};
`

export const CounterContainer = styled.span`
  background: ${props => props.theme['base-button']};
`