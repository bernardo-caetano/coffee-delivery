import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`
export const IntroContent = styled(IntroContainer)`
  flex-direction: column;
  gap: 4.125rem;
  padding: 5.75rem 0;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
export const Items = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  //ver como passa props pra dentro do css
  li + li {
    margin-top: 1.25rem;
  }
`
