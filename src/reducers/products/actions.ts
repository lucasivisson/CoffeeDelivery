import { ProductRequest } from './reducer'

export enum ActionTypes {
  INCREMENT_AMOUNT_PRODUCT = 'INCREMENT_AMOUNT_PRODUCT',
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  UPDATE_AMOUNT_PRODUCT = 'UPDATE_AMOUNT_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function incrementAmountProduct(title: string) {
  return {
    type: ActionTypes.INCREMENT_AMOUNT_PRODUCT,
    payload: {
      title,
    },
  }
}

export function addNewProduct(newProduct: ProductRequest) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function updateAmountProduct(title: string, amount: number) {
  return {
    type: ActionTypes.UPDATE_AMOUNT_PRODUCT,
    payload: {
      title,
      amount,
    },
  }
}

export function removeProduct(title: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      title,
    },
  }
}
