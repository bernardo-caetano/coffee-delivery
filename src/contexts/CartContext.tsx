import { createContext, ReactNode, useState } from 'react'

interface createContextTypes {
    cartData:cartDataValuesTypes[]
    setCartDataPopulate: (value: cartDataValuesTypes[]) => void
} 

interface CartContextProviderProps {
    children: ReactNode
}

interface cartDataValuesTypes {
    id?: string
    name?: string
    price?: string
    image?: string
    amount?: number
}

export const CartContext = createContext({} as createContextTypes)

export function CartContextProvider({children}:CartContextProviderProps) {
    const [cartData, setCartData] = useState([{id: 'jdjdj', name: 'dsndk', amount: 5,image:'url',price:'5,90'}])
    function setCartDataPopulate(value:any){
        setCartData(value)
    }
    return (
        <CartContext.Provider value={{cartData,setCartDataPopulate}}>
         {children}
        </CartContext.Provider>
    )
}