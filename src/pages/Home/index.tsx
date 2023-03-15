import { Intro } from './components/Intro'
import { CoffeeListContainer, CoffeeListContent, HomeContainer, HomeContent, TitleContainer } from './styles'
import { coffeeList } from '../../assets/content/coffeeList'
import { CoffeeCard } from './components/CoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Home() {
  const {cartData,setCartDataPopulate} = useContext(CartContext)
  return (
    <HomeContainer>
      <HomeContent>
      <Intro />
      <h1>{JSON.stringify(cartData)}</h1>
      <button onClick={() => setCartDataPopulate((prevState:any) => [...prevState,{id: 'gqaSD', name: 'gsdf', amount: 7,image:'url2',price:'6,90'}])}>Clique aqui para mudar</button>
      <CoffeeListContainer>
        <TitleContainer>
        <h3>Nossos cafés</h3>
        </TitleContainer>
        
        <CoffeeListContent>
          {coffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
              image={coffee.image} />
          ))}
        </CoffeeListContent>
      </CoffeeListContainer>
      </HomeContent>
    </HomeContainer>
  )
}
