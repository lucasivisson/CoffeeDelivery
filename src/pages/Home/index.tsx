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
  DefaultContainer,
} from './style'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Product } from './components/Product'
import { coffees } from '../../data/data.json'

export function Home() {
  return (
    <DefaultContainer>
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
                />
              </div>
            )
          })}
        </body>
      </CoffeeListContainer>
    </DefaultContainer>
  )
}
