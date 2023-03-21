import React, { createContext, useContext, useState, useReducer } from 'react'
import { CheckoutData } from '../pages/Checkout'

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
  const [products, dispatch] = useReducer(
    (state: ProductRequest[], action: any) => {
      if (action.type === 'ADD_NEW_PRODUCT') {
        return [...state, action.payload.newProduct]
      }

      if (action.type === 'INCREMENT_AMOUNT_PRODUCT') {
        return state.map((product) => {
          if (product.title === action.payload.title) {
            return { ...product, amount: product.amount + 1 }
          } else {
            return product
          }
        })
      }

      if (action.type === 'UPDATE_AMOUNT_PRODUCT') {
        return state.map((product) => {
          if (product.title === action.payload.title) {
            return { ...product, amount: action.payload.amount }
          } else {
            return product
          }
        })
      }

      if (action.type === 'REMOVE_PRODUCT') {
        const filteredProducts = state.filter(
          (product) => product.title !== action.payload.title,
        )

        return filteredProducts
      }

      return state
    },
    [],
  )
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(
    {} as CheckoutData,
  )

  function onIncrementProduct(title: string, price: number, img: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      dispatch({
        type: 'INCREMENT_AMOUNT_PRODUCT',
        payload: {
          title,
        },
      })
      // setProducts((state) => {
      // return state.map((product) => {
      //   if (product.title === title) {
      //     return { ...product, amount: product.amount + 1 }
      //   } else {
      //     return product
      //   }
      // })
      // })
    } else {
      const newProduct: ProductRequest = {
        title,
        price,
        amount: 1,
        img,
      }
      dispatch({
        type: 'ADD_NEW_PRODUCT',
        payload: {
          newProduct,
        },
      })
      // setProducts((state) => {
      //   return [...state, newProduct]
      // })
    }
  }

  function onDecrementProduct(title: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      const amount = productFounded.amount - 1
      if (amount === 0) {
        onRemoveProduct(title)
      } else {
        dispatch({
          type: 'UPDATE_AMOUNT_PRODUCT',
          payload: {
            title,
            amount,
          },
        })
        // setProducts((state) => {
        //   return state.map((product) => {
        //     if (product.title === title) {
        //       return { ...product, amount }
        //     } else {
        //       return product
        //     }
        //   })
        // })
      }
    }
  }

  function onRemoveProduct(title: string) {
    // const filteredProducts = products.filter(
    //   (product) => product.title !== title,
    // )

    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: {
        title,
      },
    })
    // setProducts(filteredProducts)
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
