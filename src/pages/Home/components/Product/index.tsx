import {
  CoffeeCardContainer,
  CoffeeInfoContainer,
  CoffeePriceContainer,
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
          <span>R$</span>
          <span>9,90</span>
        </div>
        <div>
          <button>-</button>1<button>+</button>
        </div>
        <div>
          <ShoppingCart size={24} weight="fill" />
        </div>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  )
}
