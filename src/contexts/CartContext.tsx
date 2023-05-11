import { createContext, ReactNode, useEffect, useState } from 'react'

export interface dataValuesTypes {
  cart: {
    id?: string
    name?: string
    price?: string
    image?: string
    amount?: number
  }[]
  address: {
    cep: number | null
    street: string
    number: number | null
    complement: string
    neighbor: string
    city: string
    uf: string
  }
  payment: 'credit' | 'debit' | 'money' | ''
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
      cep: null,
      street: '',
      number: null,
      complement: '',
      neighbor: '',
      city: '',
      uf: '',
    },
    payment: '',
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
