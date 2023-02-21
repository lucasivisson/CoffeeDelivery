import { HeaderContainer, LocationContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react';

export function Header() {
  return(
    <HeaderContainer>
      <nav>
        <ul>
          <img src={logo} />
          <LocationContainer>
            <div>
              <MapPin size={24} weight="fill"/>
              <p>Porto Alegre, RS</p>
            </div>
            <div>
              <ShoppingCart size={24} weight="fill"/>
            </div>
          </LocationContainer>
        </ul>
      </nav>
    </HeaderContainer>
  )
}