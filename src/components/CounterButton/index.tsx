import { CounterContainer } from "./styles";


export function CounterButton(){
    return(
        <CounterContainer>
            <button type='button' /* onClick={() => setCounter(prevState => Math.max(prevState - 1,1))}*/>-</button>
              1
            <button type='button'/* onClick={() => setCounter(prevState => prevState + 1)}*/>+</button>
          </CounterContainer>
    )
}