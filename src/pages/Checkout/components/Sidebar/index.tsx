import { useProductContext } from '../../../../contexts/ProductContext'
import { CoffeesSelected } from '../CoffeesSelected'

export function Sidebar() {
  const productContext = useProductContext()
  const { products } = productContext

  return (
    <>
      <h2>Cafés selecionados</h2>
      <div>
        {products.map((product) => {
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
      </div>
    </>
  )
}
