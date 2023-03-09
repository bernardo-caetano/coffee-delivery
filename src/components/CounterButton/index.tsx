import { CounterContainer } from "./styles";

interface CounterButtonProps {
  amount: number;
}
export function CounterButton({amount = 1}:CounterButtonProps){
    return(
        <CounterContainer>
            <button type='button' /* onClick={() => setCounter(prevState => Math.max(prevState - 1,1))}*/>-</button>
              {amount}
            <button type='button'/* onClick={() => setCounter(prevState => prevState + 1)}*/>+</button>
          </CounterContainer>
    )
}