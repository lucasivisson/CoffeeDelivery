import {
  CoffeeCardContainer,
  CoffeeInfoContainer,
  CoffeePriceContainer,
  ButtonsContainer,
  AddCoffeButtonContainer,
  ShoppingCartContainer,
} from './styles'
import image1 from '../../../../assets/coffees/coffee1.svg'
import { ShoppingCart } from 'phosphor-react'

export function Product() {
  return (
    <CoffeeCardContainer>
      <CoffeeInfoContainer>
        <img src={image1} alt="" />
        <span>TRADICIONAL</span>
        <p className="title-coffee">Expresso Tradicional</p>
        <p className="text-coffee">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </CoffeeInfoContainer>
      <CoffeePriceContainer>
        <div>
          <span className="dollar-sign">R$</span>
          <span className="coffee-price">9,90</span>
        </div>
        <ButtonsContainer>
          <AddCoffeButtonContainer>
            <button>➖</button>1<button>➕</button>
          </AddCoffeButtonContainer>
          <ShoppingCartContainer>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartContainer>
        </ButtonsContainer>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  )
}
