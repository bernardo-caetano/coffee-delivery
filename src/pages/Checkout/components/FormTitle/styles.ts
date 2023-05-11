import styled from 'styled-components'

export const FormTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  gap: 0.5rem;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`

export const InfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.125rem;

  p {
    line-height: 130%;
    align-self: stretch;
    flex-grow: 0;
  }

  p:first-child {
    color: ${(props) => props.theme['base-subtitle']};
    order: 0;
  }

  p:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    flex: none;
    order: 1;
  }
`
