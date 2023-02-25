import { Intro } from './components/Intro'
import { CoffeeListContainer, CoffeeListContent, HomeContainer } from './styles'
import { coffeeList } from '../../assets/content/coffeeList'
import { CoffeeCard } from './components/CoffeeCard'
export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeListContainer>
        <h3>Nossos cafés</h3>
        <CoffeeListContent>
          {coffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              flags={coffee.flags}
              price={coffee.price}
              image={coffee.image} />
          ))}
        </CoffeeListContent>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
