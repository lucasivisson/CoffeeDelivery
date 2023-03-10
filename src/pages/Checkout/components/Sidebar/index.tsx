import { useProductContext } from '../../../../contexts/ProductContext'
import { CoffeesSelected } from '../CoffeesSelected'
import { SidebarContainer } from './styles'

export function Sidebar() {
  const productContext = useProductContext()
  const { products } = productContext

  let total = 0

  return (
    <SidebarContainer>
      <h2>Cafés selecionados</h2>
      <div>
        <main>
          {products.map((product) => {
            total += product.price * product.amount
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
        </main>
        <footer>
          <div>
            <span>Total de itens</span>
            <span>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,70</span>
          </div>
          <button>Confirma Pedido</button>
        </footer>
      </div>
    </SidebarContainer>
  )
}
