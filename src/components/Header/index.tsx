import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react';

export function Header() {
  return(
    <HeaderContainer>
      <nav>
        <ul>
          <img src={logo} />
          <ul>
            <div>
              <MapPin/>
              <p>Porto Alegre, RS</p>
            </div>
            <ShoppingCart/>
          </ul>
        </ul>
      </nav>
    </HeaderContainer>
  )
}