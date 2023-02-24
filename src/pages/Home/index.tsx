import { Intro } from './components/Intro'
import { CoffeeListContainer, CoffeeListContent, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeListContainer>
        <h3>Nossos cafés</h3>
        <CoffeeListContent>
          <p>Fazer map do componente de café</p>
        </CoffeeListContent>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
