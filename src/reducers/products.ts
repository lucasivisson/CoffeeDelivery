import { ProductRequest } from '../contexts/ProductContext'

export function productsReducer(state: ProductRequest[], action: any) {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      return [...state, action.payload.newProduct]

    case 'INCREMENT_AMOUNT_PRODUCT':
      return state.map((product) => {
        if (product.title === action.payload.title) {
          return { ...product, amount: product.amount + 1 }
        } else {
          return product
        }
      })

    case 'UPDATE_AMOUNT_PRODUCT':
      return state.map((product) => {
        if (product.title === action.payload.title) {
          return { ...product, amount: action.payload.amount }
        } else {
          return product
        }
      })

    case 'REMOVE_PRODUCT':
      return state.filter((product) => product.title !== action.payload.title)

    default:
      return state
  }
}
