import {
  ActionsContainer,
  AddCoffeButtonContainer,
  CoffeesSelectedContainer,
  CoffeeBoxContainer,
  CoffeeMainBoxContainer,
} from './styles'
import { useProductContext } from '../../../../contexts/ProductContext'
import { Trash } from 'phosphor-react'

type CoffeesSelectedType = {
  title: string
  price: number
  amount: number
  img: string
  itsFirst: boolean
}

export function CoffeesSelected({
  title,
  price,
  amount,
  img,
  itsFirst,
}: CoffeesSelectedType) {
  const productContext = useProductContext()
  const { onIncrementProduct, onDecrementProduct, onRemoveProduct } =
    productContext

  function handleIncrementProduct() {
    onIncrementProduct(title, price, img)
  }

  function handleDecrementProduct() {
    onDecrementProduct(title)
  }

  function handleRemoveProduct() {
    onRemoveProduct(title)
  }

  return (
    <CoffeeMainBoxContainer>
      <CoffeesSelectedContainer itsFirst={itsFirst}>
        <img src={`src/assets/coffees/${img}.svg`} alt="" />
        <CoffeeBoxContainer>
          <p>{title}</p>
          <ActionsContainer>
            <AddCoffeButtonContainer>
              <button className="icon" onClick={handleDecrementProduct}>
                -
              </button>
              {amount}
              <button className="icon" onClick={handleIncrementProduct}>
                +
              </button>
            </AddCoffeButtonContainer>
            <button onClick={handleRemoveProduct}>
              <Trash className="icon" size={18} /> Remover
            </button>
          </ActionsContainer>
        </CoffeeBoxContainer>
        <p>
          {price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </CoffeesSelectedContainer>
      <hr />
    </CoffeeMainBoxContainer>
  )
}
