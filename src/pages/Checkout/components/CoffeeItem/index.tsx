/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { Trash } from 'phosphor-react'
import {
  ActionsContainer,
  CoffeeItemContainer,
  CoffeeItemContent,
  CounterContainer,
  DetailsContainer,
  Title,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffeeData: {
    id: string
    image: string
    name: string
    price: string
    amount: number
    subtotal: number
  }
}

export function CoffeeItem({ coffeeData }: CoffeeItemProps) {
  const { data, setDataPopulate } = useContext(CartContext)
  const [counter, setCounter] = useState<number>(
    data.cart[data.cart.findIndex((item) => item.name === coffeeData.name)]
      .amount!,
  )

  function removeItem() {
    const index = data.cart.findIndex((item) => item.name === coffeeData.name)
    const dataUpdater = { ...data }
    dataUpdater.cart.splice(index, 1)
    setDataPopulate(dataUpdater)
  }

  function updateData() {
    const index = data.cart?.findIndex((item) => item.name === coffeeData.name) // using name because id change every render
    const cartDataUpdater = { ...data }
    if (index !== -1) {
      cartDataUpdater.cart[index].amount = counter
      cartDataUpdater.cart[index].subtotal =
        counter *
        parseFloat(cartDataUpdater.cart[index].price?.replace(',', '.')!)
      setDataPopulate(cartDataUpdater)
    } else {
      console.log('Error at uptade data: Index not found.')
    }
  }

  useEffect(() => {
    updateData()
  }, [counter])
  return (
    <CoffeeItemContainer>
      <CoffeeItemContent>
        <img src={coffeeData.image} alt={coffeeData.name} />
        <DetailsContainer>
          <Title>
            <p>{coffeeData.name}</p>
            <p>
              R$
              {coffeeData.subtotal.toFixed(2).replace('.', ',')}
            </p>
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
