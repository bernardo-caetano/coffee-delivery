import styled from 'styled-components'

export const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  
`

export const CoffeeCardContainer = styled(BaseContainer)`
 
`
export const CoffeeCardContent = styled(BaseContainer)`
flex-direction: column;
width: 16rem;
height: 19.375rem;
padding: 0 1.25rem 1.25rem 1.25rem;
background: ${props => props.theme['base-card']};
border-radius: 6px 36px;
 img {
  margin-top: -1.25rem;
 }
`

export const InfoContainer = styled(BaseContainer)`
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: ${props => props.theme['base-subtitle']}
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${props => props.theme['base-label']}
  }
`

export const Tag = styled.span`
padding: 0.25rem 0.5rem;
border-radius:6.25rem;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
`

export const CounterContainer = styled.span`
  background: ${props => props.theme['base-button']};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  flex: none;
  order: 0;
  flex-grow: 0;

  button {
    border: none;
    background: transparent;
    color: ${props => props.theme.purple};
    
  }
`

export const BuyContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.0625rem;

  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    p:first-child {
      font-size: 0.875rem;
      line-height: 130%;
      text-align: right;
      color: ${props => props.theme['base-text']};
    }
    p:last-child {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.9375rem;
      letter-spacing: 0em;
      text-align: right;
    }
    
  }
`

export const TagContainer = styled(BaseContainer)`
  margin: 0.75rem 0 1rem 0;
  gap: 0.25rem;
`