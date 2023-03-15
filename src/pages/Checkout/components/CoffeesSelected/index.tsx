import {
  ActionsContainer,
  AddCoffeButtonContainer,
  CoffeesSelectedContainer,
  CoffeeBoxContainer,
  CoffeeMainBoxContainer,
} from './styles'
import { useProductContext } from '../../../../contexts/ProductContext'

type CoffeesSelectedType = {
  title: string
  price: number
  amount: number
  img: string
}

export function CoffeesSelected({
  title,
  price,
  amount,
  img,
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
      <CoffeesSelectedContainer>
        <img src={`src/assets/coffees/${img}.svg`} alt="" />
        <CoffeeBoxContainer>
          <p>{title}</p>
          <ActionsContainer>
            <AddCoffeButtonContainer>
              <button className="minus" onClick={handleDecrementProduct}>
                -
              </button>
              {amount}
              <button className="plus" onClick={handleIncrementProduct}>
                +
              </button>
            </AddCoffeButtonContainer>
            <button onClick={handleRemoveProduct}>Remover</button>
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
