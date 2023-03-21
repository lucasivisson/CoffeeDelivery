import React, { createContext, useContext, useState, useReducer } from 'react'
import { CheckoutData } from '../pages/Checkout'
import {
  addNewProduct,
  incrementAmountProduct,
  removeProduct,
  updateAmountProduct,
} from '../reducers/products/actions'
import { ProductRequest, productsReducer } from '../reducers/products/reducer'

interface IChildrenProps {
  children: React.ReactNode
}

type ProductContextType = {
  products: ProductRequest[]
  checkoutData: CheckoutData
  onIncrementProduct: (title: string, price: number, img: string) => void
  onDecrementProduct: (title: string) => void
  onRemoveProduct: (title: string) => void
  onFinishCheckout: (data: CheckoutData) => void
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
)

export const ProductContextProvider = ({ children }: IChildrenProps) => {
  const [products, dispatch] = useReducer(productsReducer, [])
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(
    {} as CheckoutData,
  )

  function onIncrementProduct(title: string, price: number, img: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      dispatch(incrementAmountProduct(title))
    } else {
      const newProduct: ProductRequest = {
        title,
        price,
        amount: 1,
        img,
      }
      dispatch(addNewProduct(newProduct))
    }
  }

  function onDecrementProduct(title: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      const amount = productFounded.amount - 1
      if (amount === 0) {
        onRemoveProduct(title)
      } else {
        dispatch(updateAmountProduct(title, amount))
      }
    }
  }

  function onRemoveProduct(title: string) {
    dispatch(removeProduct(title))
  }

  function onFinishCheckout(data: CheckoutData) {
    setCheckoutData(data)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        checkoutData,
        onIncrementProduct,
        onDecrementProduct,
        onRemoveProduct,
        onFinishCheckout,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
