import styled from 'styled-components'

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