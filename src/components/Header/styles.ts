import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 10rem;
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
export const Cart = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  padding: 0.5rem;
`
