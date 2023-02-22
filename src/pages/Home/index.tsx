import homeImage from '../../assets/homeImage.svg'
import {
  HomeContainer,
  TextBoxContainer,
  GeneralListContainer,
  ListContainer,
  ShoppingCardContainer,
  TimerContainer,
  PackageContainer,
  CoffeeContainer,
} from './style'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <TextBoxContainer>
        <div>
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <GeneralListContainer>
          <ListContainer>
            <li>
              <ShoppingCardContainer>
                <ShoppingCart size={18} weight="fill" />
              </ShoppingCardContainer>
              Compra simples e segura
            </li>
            <li>
              <TimerContainer>
                <Timer size={18} weight="fill" />
              </TimerContainer>
              Entrega rápida e rastreada
            </li>
          </ListContainer>
          <ListContainer>
            <li>
              <PackageContainer>
                <Package size={18} weight="fill" />
              </PackageContainer>
              Embalagem mantém o café intacto
            </li>
            <li>
              <CoffeeContainer>
                <Coffee size={18} weight="fill" />
              </CoffeeContainer>
              O café chega fresquinho até você
            </li>
          </ListContainer>
        </GeneralListContainer>
      </TextBoxContainer>
      <div>
        <img src={homeImage} alt="" />
      </div>
    </HomeContainer>
  )
}
