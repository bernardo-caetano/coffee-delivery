import { ShoppingCart } from "phosphor-react";
import { Cart, cartButtonTypes } from "./styles";



interface CartButtonProps {
    color: string;
    background: cartButtonTypes['background'];
}


export function CartButton({color, background}: CartButtonProps) {
    return(
        <Cart background={background}>
          <ShoppingCart  size={22}  color={color} weight="fill" />
        </Cart>
    )
}