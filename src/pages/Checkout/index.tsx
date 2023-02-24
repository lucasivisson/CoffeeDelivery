import { useContext } from 'react'
import {
  ProductContext,
  // useProductContext,
} from '../../contexts/ProductContext'

export function Checkout() {
  const { a } = useContext(ProductContext)
  // const {  } = useProductContext()
  return <h1>{a}</h1>
}
