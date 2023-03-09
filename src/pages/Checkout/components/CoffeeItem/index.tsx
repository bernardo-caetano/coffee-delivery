import { Trash } from "phosphor-react"
import { CounterButton } from "../../../../components/CounterButton"
import {   CoffeeItemContainer } from "./styles"

interface CoffeeItemProps {
    image: string,
    name: string,
    price: number,
    amount: number,
}

export function CoffeeItem({image,name, price, amount}:CoffeeItemProps){
    return(
        
          <CoffeeItemContainer>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>R$ {price}</p>
            <CounterButton/>
            <button type="button">
                <Trash size={16} color="#8047F8"/>
                REMOVER
            </button>
            <hr/>
          </CoffeeItemContainer>
          
    )
}