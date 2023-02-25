
import { useState } from 'react'
import { BaseContainer, BuyContainer, CoffeeCardContainer, CoffeeCardContent, ColumnContainer, CounterContainer, Tag } from './styles'

interface CoffeeCardProps {
  name: string
  tags: string[]
  description: string
  price: string
  image: string
}

export function CoffeeCard({
  name,
  tags,
  description,
  price,
  image,
}: CoffeeCardProps) {
  const [counter, setCounter] = useState(1)

  

  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        
        <img src={image} alt={name}/>
        
        <BaseContainer>
        {tags.map(tag => (<Tag>{tag}</Tag>))}
        </BaseContainer>
        <ColumnContainer>
          <h4>{name}</h4>
          <p>{description}</p>
        </ColumnContainer>
        <BuyContainer>
          <span><p>R$</p>{price}</span>
          
          <CounterContainer>
            <button type='button' onClick={() => setCounter(prevState => Math.max(prevState - 1,1))}>-</button>
              {counter}
            <button type='button' onClick={() => setCounter(prevState => prevState + 1)}>+</button>
          </CounterContainer>
        </BuyContainer>
          
        

        </CoffeeCardContent>
    </CoffeeCardContainer>
  )
}
