import { useProductContext } from '../../../../contexts/ProductContext'
import { CoffeesSelected } from '../CoffeesSelected'
import {
  SidebarContainer,
  FooterContainer,
  CurrencyContainer,
  CoffeeListContainer,
} from './styles'

export function Sidebar() {
  const productContext = useProductContext()
  const { products } = productContext

  let total = 0

  let haveItemsInCart = false

  return (
    <SidebarContainer>
      <div>
        <CoffeeListContainer>
          {products.map((product) => {
            total += product.price * product.amount
            haveItemsInCart = true
            return (
              <CoffeesSelected
                key={product.title}
                title={product.title}
                price={product.price}
                amount={product.amount}
                img={product.img}
              />
            )
          })}
        </CoffeeListContainer>
        <FooterContainer>
          <CurrencyContainer>
            <span>Total de itens</span>
            <span>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </CurrencyContainer>
          <CurrencyContainer>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </CurrencyContainer>
          <CurrencyContainer itsTotal>
            <span>
              <b>Total</b>
            </span>
            <span>
              <b>R$ 107,70</b>
            </span>
          </CurrencyContainer>
          <button type="submit" disabled={!haveItemsInCart}>
            Confirmar Pedido
          </button>
        </FooterContainer>
      </div>
    </SidebarContainer>
  )
}
