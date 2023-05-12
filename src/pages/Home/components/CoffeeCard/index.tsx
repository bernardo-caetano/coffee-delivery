import { useContext, useState } from 'react'
import {
  BuyContainer,
  Cart,
  CoffeeCardContainer,
  CoffeeCardContent,
  CounterContainer,
  InfoContainer,
  Tag,
  TagContainer,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { ShoppingCart } from 'phosphor-react'

interface CoffeeCardProps {
  coffeeData: {
    id: string
    name: string
    tags: string[]
    description: string
    price: string
    image: string
  }
}

export function CoffeeCard({ coffeeData }: CoffeeCardProps) {
  const { data, setDataPopulate } = useContext(CartContext)
  const [counter, setCounter] = useState<number>(1)

  function insertCoffeData() {
    const index = data.cart?.findIndex((item) => item.name === coffeeData.name) // using name because id change every render
    const cartDataUpdater = { ...data }
    if (index !== -1) {
      cartDataUpdater.cart[index].amount = counter
      setDataPopulate(cartDataUpdater)
    } else {
      cartDataUpdater.cart.push({
        id: coffeeData.id,
        name: coffeeData.name,
        amount: counter,
        image: coffeeData.image,
        price: coffeeData.price,
      })
      setDataPopulate(cartDataUpdater)
    }
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <img src={coffeeData.image} alt={coffeeData.name} />

        <TagContainer>
          {coffeeData.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <InfoContainer>
          <h4>{coffeeData.name}</h4>
          <p>{coffeeData.description}</p>
        </InfoContainer>
        <BuyContainer>
          <span>
            <p>R$</p>
            <p>{coffeeData.price}</p>
          </span>

          <CounterContainer>
            <button
              type="button"
              onClick={() =>
                setCounter((prevState: number) => Math.max(prevState - 1, 1))
              }
            >
              -
            </button>
            {counter}
            <button
              type="button"
              onClick={() => setCounter((prevState: number) => prevState + 1)}
            >
              +
            </button>
          </CounterContainer>

          <Cart background={'purpleDark'} onClick={() => insertCoffeData()}>
            <ShoppingCart size={22} color={'#FFFFFF'} weight="fill" />
          </Cart>
        </BuyContainer>
      </CoffeeCardContent>
    </CoffeeCardContainer>
  )
}
