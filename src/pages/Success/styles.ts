import styled from 'styled-components'

const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

`
export const SuccessContainer = styled(BaseContainer)`
  max-width: 70rem;
  flex-direction: column;
`
export const Title = styled(BaseContainer)`
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`
export const SuccessContent = styled(BaseContainer)`
  gap: 6.375rem;
`
export const DeliveryInfo = styled(BaseContainer)`
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border: 1px solid #DBAC2C;
  border-radius: 6px 36px;
  min-width: 32.875rem;
`
