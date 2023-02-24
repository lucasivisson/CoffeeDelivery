import homeImage from '../../assets/homeImage.svg'
import {
  MarketingHomeContainer,
  TextBoxContainer,
  GeneralListContainer,
  ListContainer,
  ShoppingCardIconContainer,
  TimerIconContainer,
  PackageIconContainer,
  CoffeeIconContainer,
  CoffeeListContainer,
  HomeContainer,
} from './style'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Product } from './components/Product'
import { coffees } from '../../data/data.json'
import { useState } from 'react'

export type ProductRequest = {
  title: string
  price: string
  amount: number
}

export function Home() {
  const [products, setProducts] = useState<ProductRequest[]>([])

  function onAddProduct(title: string, price: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      setProducts((state) => {
        return state.map((product) => {
          if (product.title === title) {
            return { ...product, amount: product.amount + 1 }
          } else {
            return product
          }
        })
      })
    } else {
      const product: ProductRequest = {
        title,
        price,
        amount: 1,
      }
      setProducts((state) => {
        return [...state, product]
      })
    }
  }

  function onRemoveProduct(title: string) {
    const productFounded = products.find((product) => product.title === title)

    if (productFounded) {
      const amount = productFounded.amount - 1
      if (amount === 0) {
        const filteredProducts = products.filter(
          (product) => product.title !== title,
        )
        setProducts(filteredProducts)
      } else {
        setProducts((state) => {
          return state.map((product) => {
            if (product.title === title) {
              return { ...product, amount }
            } else {
              return product
            }
          })
        })
      }
    }
  }

  return (
    <HomeContainer>
      <MarketingHomeContainer>
        <TextBoxContainer>
          <div>
            <p>Encontre o café perfeito para qualquer hora do dia</p>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <GeneralListContainer>
            <ListContainer>
              <li>
                <ShoppingCardIconContainer>
                  <ShoppingCart size={18} weight="fill" />
                </ShoppingCardIconContainer>
                Compra simples e segura
              </li>
              <li>
                <TimerIconContainer>
                  <Timer size={18} weight="fill" />
                </TimerIconContainer>
                Entrega rápida e rastreada
              </li>
            </ListContainer>
            <ListContainer>
              <li>
                <PackageIconContainer>
                  <Package size={18} weight="fill" />
                </PackageIconContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <CoffeeIconContainer>
                  <Coffee size={18} weight="fill" />
                </CoffeeIconContainer>
                O café chega fresquinho até você
              </li>
            </ListContainer>
          </GeneralListContainer>
        </TextBoxContainer>
        <div>
          <img src={homeImage} alt="" />
        </div>
      </MarketingHomeContainer>
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <body>
          {coffees.map((coffee) => {
            return (
              <div className="coffee-card" key={coffee.title}>
                <Product
                  img={coffee.img}
                  types={coffee.types}
                  price={coffee.price}
                  title={coffee.title}
                  subtitle={coffee.subtitle}
                  onAddProduct={onAddProduct}
                  onRemoveProduct={onRemoveProduct}
                  product={products.find(
                    (product) => product.title === coffee.title,
                  )}
                />
              </div>
            )
          })}
        </body>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
