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
  price: number
  title: string
  subtitle: string
}

export function Product({ img, types, price, title, subtitle }: ProductData) {
  const { onIncrementProduct, onDecrementProduct, products } =
    useProductContext()

  function handleIncrementProduct() {
    onIncrementProduct(title, price, img)
  }

  function handleDecrementProduct() {
    onDecrementProduct(title)
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
          <span className="coffee-price">
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
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
