
import { useState } from 'react'
import { CartButton } from '../../../../components/CartButton'
import {  BuyContainer, CoffeeCardContainer, CoffeeCardContent, CounterContainer, InfoContainer, Tag, TagContainer } from './styles'

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
  const [counter, setCounter] = useState<number>(1)

  

  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        
        <img src={image} alt={name}/>
        
        <TagContainer>
        {tags.map(tag => (<Tag key={tag}>{tag}</Tag>))}
        </TagContainer>
        <InfoContainer>
          <h4>{name}</h4>
          <p>{description}</p>
        </InfoContainer>
        <BuyContainer>
          <span><p>R$</p><p>{price}</p></span>
          
         
          <CounterContainer>
            <button type='button'  onClick={() => setCounter((prevState:number) => Math.max(prevState - 1,1))}>-</button>
              {counter}
            <button type='button' onClick={() => setCounter((prevState:number) => prevState + 1)}>+</button>
          </CounterContainer>
          <CartButton background='purpleDark' color='#FFFFFF'/>
        </BuyContainer>
          
        

        </CoffeeCardContent>
    </CoffeeCardContainer>
  )
}
