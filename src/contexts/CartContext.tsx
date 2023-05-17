import { createContext, ReactNode, useEffect, useState } from 'react'

export interface dataValuesTypes {
  cart: {
    id: string
    name: string
    price: string
    image: string
    amount: number
    subtotal: number
  }[]

  address: {
    cep: string
    street: string
    number: string
    complement: string
    neighbor: string
    city: string
    uf: string
  }
  payment: 'credit' | 'debit' | 'money' | null

  total: number
}

interface createContextTypes {
  data: dataValuesTypes
  setDataPopulate: (value: dataValuesTypes) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as createContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [data, setData] = useState<dataValuesTypes>({
    cart: [],
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighbor: '',
      city: '',
      uf: '',
    },
    payment: null,

    total: 0,
  })

  function setDataPopulate(value: dataValuesTypes) {
    setData(value)
  }

  useEffect(() => {
    if (data.cart.length > 0) {
      localStorage.setItem(
        '@coffee-delivery-data-v-1.0.0',
        JSON.stringify(data),
      )
    }
  }, [data])

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem('@coffee-delivery-data-v-1.0.0')!,
    )

    if (localStorageData?.cart.length > 0 && localStorageData !== null) {
      setDataPopulate(localStorageData)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        data,
        setDataPopulate,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
