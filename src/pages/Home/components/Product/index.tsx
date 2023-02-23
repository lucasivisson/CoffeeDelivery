import {
  CoffeeCardContainer,
  CoffeeInfoContainer,
  CoffeePriceContainer,
  ButtonsContainer,
  AddCoffeButtonContainer,
  ShoppingCartContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'

type ProductData = {
  img: string
  types: string[]
  price: string
  title: string
  subtitle: string
}

export function Product({ img, types, price, title, subtitle }: ProductData) {
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
            <button className="minus">-</button>1
            <button className="plus">+</button>
          </AddCoffeButtonContainer>
          <ShoppingCartContainer>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartContainer>
        </ButtonsContainer>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  )
}
