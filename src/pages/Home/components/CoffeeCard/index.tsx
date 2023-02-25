import { Flag } from 'phosphor-react'
import { useState } from 'react'
import { BaseContainer, CoffeeCardContainer, CoffeeCardContent, ColumnContainer, CounterContainer } from './styles'

interface CoffeeCardProps {
  name: string
  flags: string[]
  description: string
  price: string
  image: string
}

export function CoffeeCard({
  name,
  flags,
  description,
  price,
  image,
}: CoffeeCardProps) {
  const [counter, setCounter] = useState(1)

  

  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <BaseContainer>
        <img src={image} alt={name}/>
        </BaseContainer>
        <BaseContainer>
        {flags.map(flag => (<Flag>{flag}</Flag>))}
        </BaseContainer>
        <ColumnContainer>
          <h4>{name}</h4>
          <p>{description}</p>
        </ColumnContainer>
        <BaseContainer>
          <span><p>R$</p>{price}</span>
          <CounterContainer>
            <button type='button' onClick={() => setCounter(prevState => Math.max(prevState - 1,1))}>-</button>
              {counter}
            <button type='button' onClick={() => setCounter(prevState => prevState + 1)}>+</button>
          </CounterContainer>
        </BaseContainer>
        

        </CoffeeCardContent>
    </CoffeeCardContainer>
  )
}
