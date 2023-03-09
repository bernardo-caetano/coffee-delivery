import { Trash } from "phosphor-react"
import { CounterButton } from "../../../../components/CounterButton"
import {   ActionsContainer, CoffeeItemContainer, CoffeeItemContent, DetailsContainer, Title } from "./styles"


interface CoffeeItemProps {
    image: string,
    name: string,
    price: number,
    amount: number,
}

export function CoffeeItem({image,name, price, amount}:CoffeeItemProps){
    return(
        
          <CoffeeItemContainer>
            <CoffeeItemContent>
                <img src={image} alt={name} />
                <DetailsContainer>
                    <Title>
                        <p>{name}</p>
                        <p>R$ {price}</p>
                    </Title>
                    <ActionsContainer>
                        <CounterButton amount={amount}/>
                        <button type="button">
                            <Trash size={16} color="#8047F8"/>
                            REMOVER
                        </button>
                    </ActionsContainer>
                </DetailsContainer>
                
            </CoffeeItemContent>
            
            
            <hr/>
          </CoffeeItemContainer>
          
    )
}