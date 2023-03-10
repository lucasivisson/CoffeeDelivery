import React, { createContext, useContext, useState } from 'react'

interface IChildrenProps {
  children: React.ReactNode
}

export type ProductRequest = {
  title: string
  price: number
  amount: number
  img: string
}

type ProductContextType = {
  products: ProductRequest[]
  onIncrementProduct: (title: string, price: number, img: string) => void
  onDecrementProduct: (title: string) => void
  onRemoveProduct: (title: string) => void
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
)

export const ProductContextProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState<ProductRequest[]>([])

  function onIncrementProduct(title: string, price: number, img: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      setProducts((state) => {
        return state.map((product) => {
          if (product.title === title) {
            return { ...product, amount: product.amount + 1 }
          } else {
            return product
          }
        })
      })
    } else {
      const product: ProductRequest = {
        title,
        price,
        amount: 1,
        img,
      }
      setProducts((state) => {
        return [...state, product]
      })
    }
  }

  function onDecrementProduct(title: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      const amount = productFounded.amount - 1
      if (amount === 0) {
        onRemoveProduct(title)
      } else {
        setProducts((state) => {
          return state.map((product) => {
            if (product.title === title) {
              return { ...product, amount }
            } else {
              return product
            }
          })
        })
      }
    }
  }

  function onRemoveProduct(title: string) {
    const filteredProducts = products.filter(
      (product) => product.title !== title,
    )

    setProducts(filteredProducts)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        onIncrementProduct,
        onDecrementProduct,
        onRemoveProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
