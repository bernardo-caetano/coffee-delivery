import { Trash } from 'phosphor-react'
import {
  ActionsContainer,
  CoffeeItemContainer,
  CoffeeItemContent,
  CounterContainer,
  DetailsContainer,
  Title,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffeeData: {
    image: string
    name: string
    price: number
    amount: number
  }
}

export function CoffeeItem({ coffeeData }: CoffeeItemProps) {
  const [counter, setCounter] = useState<number>(1)
  const { data, setDataPopulate } = useContext(CartContext)

  function removeItem() {
    const index = data.cart.findIndex((item) => {
      item.id === coffeeData.id
    })
    const dataUpdater = { ...data }
    dataUpdater.cart.slice(index, index + 1)
    setDataPopulate(dataUpdater)
  }
  return (
    <CoffeeItemContainer>
      <CoffeeItemContent>
        <img src={coffeeData.image} alt={coffeeData.name} />
        <DetailsContainer>
          <Title>
            <p>{coffeeData.name}</p>
            <p>R$ {coffeeData.price}</p>
          </Title>
          <ActionsContainer>
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
            <button type="button" onClick={() => removeItem()}>
              <Trash size={16} color="#8047F8" />
              REMOVER
            </button>
          </ActionsContainer>
        </DetailsContainer>
      </CoffeeItemContent>

      <hr />
    </CoffeeItemContainer>
  )
}
