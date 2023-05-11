import { Intro } from './components/Intro'
import {
  CoffeeListContainer,
  CoffeeListContent,
  HomeContainer,
  HomeContent,
  TitleContainer,
} from './styles'
import { coffeeList } from '../../assets/content/coffeeList'
import { CoffeeCard } from './components/CoffeeCard'
export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <Intro />
        <CoffeeListContainer>
          <TitleContainer>
            <h3>Nossos cafés</h3>
          </TitleContainer>

          <CoffeeListContent>
            {coffeeList.map((coffee) => (
              <CoffeeCard key={coffee.id} coffeeData={coffee} />
            ))}
          </CoffeeListContent>
        </CoffeeListContainer>
      </HomeContent>
    </HomeContainer>
  )
}
