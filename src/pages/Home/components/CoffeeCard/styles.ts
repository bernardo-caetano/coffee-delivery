import styled from 'styled-components'

export const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    margin-top: -1.25rem;
    top: 0;
    position: relative;
  }
`

export const CoffeeCardContainer = styled(BaseContainer)`
 
`
export const CoffeeCardContent = styled(BaseContainer)`
flex-direction: column;
width: 16rem;
height: 19.375rem;
padding: 0 1.25rem 1.25rem 1.25rem;
background: ${props => props.theme['base-card']};
`

export const ColumnContainer = styled(BaseContainer)`
  flex-direction: column;
`

export const Tag = styled.span`
padding: 0.25rem 0.5rem;
border-radius:6.25rem;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
`

export const CounterContainer = styled.span`
  background: ${props => props.theme['base-button']};
`

export const BuyContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
`