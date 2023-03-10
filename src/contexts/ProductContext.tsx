import React, { createContext, useContext, useState } from 'react'

interface IChildrenProps {
  children: React.ReactNode
}

export type ProductRequest = {
  title: string
  price: string
  amount: number
  img: string
}

type ProductContextType = {
  products: ProductRequest[]
  onAddProduct: (title: string, price: string, img: string) => void
  onRemoveProduct: (title: string) => void
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
)

export const ProductContextProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState<ProductRequest[]>([])

  function onAddProduct(title: string, price: string, img: string) {
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

  function onRemoveProduct(title: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      const amount = productFounded.amount - 1
      if (amount === 0) {
        const filteredProducts = products.filter(
          (product) => product.title !== title,
        )
        setProducts(filteredProducts)
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

  return (
    <ProductContext.Provider
      value={{ products, onAddProduct, onRemoveProduct }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
