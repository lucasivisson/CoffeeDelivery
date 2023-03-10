import {
  CoffeeCardContainer,
  CoffeeInfoContainer,
  CoffeePriceContainer,
  ButtonsContainer,
  AddCoffeButtonContainer,
  ShoppingCartContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useProductContext } from '../../../../contexts/ProductContext'
import { Link } from 'react-router-dom'

type ProductData = {
  img: string
  types: string[]
  price: string
  title: string
  subtitle: string
}

export function Product({ img, types, price, title, subtitle }: ProductData) {
  const { onAddProduct, onRemoveProduct, products } = useProductContext()

  function handleIncrementProduct() {
    onAddProduct(title, price, img)
  }

  function handleDecrementProduct() {
    onRemoveProduct(title)
  }

  const product = products.find((product) => product.title === title)

  return (
    <CoffeeCardContainer>
      <CoffeeInfoContainer>
        <img src={`src/assets/coffees/${img}.svg`} alt="" />
        <div className="coffee-type">
          {types.map((type) => {
            return <span key={type}>{type}</span>
          })}
        </div>
        <p className="title-coffee">{title}</p>
        <p className="text-coffee">{subtitle}</p>
      </CoffeeInfoContainer>
      <CoffeePriceContainer>
        <div>
          <span className="dollar-sign">R$</span>
          <span className="coffee-price">{price}</span>
        </div>
        <ButtonsContainer>
          <AddCoffeButtonContainer>
            <button className="minus" onClick={handleDecrementProduct}>
              -
            </button>
            {product ? product.amount : '0'}
            <button className="plus" onClick={handleIncrementProduct}>
              +
            </button>
          </AddCoffeButtonContainer>
          <Link to={`checkout`}>
            <ShoppingCartContainer>
              <ShoppingCart size={24} weight="fill" />
            </ShoppingCartContainer>
          </Link>
        </ButtonsContainer>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  )
}
