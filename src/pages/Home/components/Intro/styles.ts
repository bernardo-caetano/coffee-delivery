import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    max-width: 35rem;
    gap: 1rem;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: auto;
      max-width: 29.75rem;
    }
  }
`
export const IntroContent = styled(IntroContainer)`
  flex-direction: column;
  gap: 4.125rem;
  padding: 5.75rem 0;

  @media (max-width: 1200px) {
    gap: 2rem;
    padding: 2rem 0;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`
export const Items = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem 2.5rem;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  @media (max-width: 1200px) {
    gap: 1rem 0.25rem;

    li {
      gap: 0.25rem;
    }
  }
  @media (max-width: 768px) {
    li {
      span {
        height: 1.75rem;
      }
    }
  }
`
