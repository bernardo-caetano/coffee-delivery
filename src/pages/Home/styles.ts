import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 9.8125rem;
`

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 70rem;
  width: 100%;
`

export const CoffeeListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeListContent = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 2.5rem 2rem;
  width: 100%;
`
