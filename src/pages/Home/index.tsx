import homeImage from '../../assets/homeImage.svg'
import { HomeContainer } from './style'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <div>
          <ul>
            <li>
              <ShoppingCart size={24} weight="fill"/>
              Compra simples e segura
            </li>
            <li>
              <Timer size={24} weight="fill"/>
              Entrega rápida e rastreada
            </li>
          </ul>
          <ul>
            <li>
              <Package size={24} weight="fill"/>
              Embalagem mantém o café intacto
            </li>
            <li>
              <Coffee size={24} weight="fill"/>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={homeImage}/>
      </div>
    </HomeContainer>
  )
}