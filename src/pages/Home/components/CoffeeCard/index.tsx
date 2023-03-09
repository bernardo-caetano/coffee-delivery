
import { useState } from 'react'
import { CartButton } from '../../../../components/CartButton'
import { CounterButton } from '../../../../components/CounterButton'
import {  BuyContainer, CoffeeCardContainer, CoffeeCardContent, InfoContainer, Tag, TagContainer } from './styles'

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
        
        <TagContainer>
        {tags.map(tag => (<Tag key={tag}>{tag}</Tag>))}
        </TagContainer>
        <InfoContainer>
          <h4>{name}</h4>
          <p>{description}</p>
        </InfoContainer>
        <BuyContainer>
          <span><p>R$</p><p>{price}</p></span>
          
          <CounterButton />
          <CartButton background='purpleDark' color='#FFFFFF'/>
        </BuyContainer>
          
        

        </CoffeeCardContent>
    </CoffeeCardContainer>
  )
}
