import { AddCoffeButtonContainer } from './styles'
import { useProductContext } from '../../../../contexts/ProductContext'

type CoffeesSelectedType = {
  title: string
  price: string
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
  const { onAddProduct, onRemoveProduct } = productContext

  function handleIncrementProduct() {
    onAddProduct(title, price, img)
  }

  function handleDecrementProduct() {
    onRemoveProduct(title)
  }

  return (
    <>
      <img src={`src/assets/coffees/${img}.svg`} alt="" />
      <p>{title}</p>
      <AddCoffeButtonContainer>
        <button className="minus" onClick={handleDecrementProduct}>
          -
        </button>
        {amount}
        <button className="plus" onClick={handleIncrementProduct}>
          +
        </button>
      </AddCoffeButtonContainer>
      <button>Remover</button>
      <p>{price}</p>
    </>
  )
}
