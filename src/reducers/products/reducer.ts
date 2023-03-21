import { ActionTypes } from './actions'

export interface ProductRequest {
  title: string
  price: number
  amount: number
  img: string
}

export function productsReducer(
  state: ProductRequest[],
  action: any,
): ProductRequest[] {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      return [...state, action.payload.newProduct]
    }

    case ActionTypes.INCREMENT_AMOUNT_PRODUCT: {
      return state.map((product) => {
        if (product.title === action.payload.title) {
          return { ...product, amount: product.amount + 1 }
        } else {
          return product
        }
      })
    }

    case ActionTypes.UPDATE_AMOUNT_PRODUCT: {
      return state.map((product) => {
        if (product.title === action.payload.title) {
          return { ...product, amount: action.payload.amount }
        } else {
          return product
        }
      })
    }

    case ActionTypes.REMOVE_PRODUCT: {
      return state.filter((product) => product.title !== action.payload.title)
    }

    default:
      return state
  }
}
