import React, { createContext, useContext, useState } from 'react'

interface IChildrenProps {
  children: React.ReactNode
}

type a = {
  a: string
  b: string
  functionA: () => void
}

export const ProductContext = createContext<a>({} as a)

export const ProductContextProvider = ({ children }: IChildrenProps) => {
  console.log(children)
  const [a, setA] = useState('dasdasd')
  const [b, setB] = useState('')

  function functionA() {
    setA('a')
    setB('b')
  }

  return (
    <ProductContext.Provider value={{ a, b, functionA }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
