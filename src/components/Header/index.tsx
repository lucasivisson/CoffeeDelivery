import { CheckoutContainer, HeaderContainer, LocationCheckoutContainer, LocationContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react';
import { Link } from "react-router-dom";

export function Header() {
  return(
    <HeaderContainer>
      <nav>
        <ul>
          <Link to={``}>
            <img src={logo} />
          </Link>
          <LocationCheckoutContainer>
            <LocationContainer>
              <MapPin size={24} weight="fill"/>
              <p>Porto Alegre, RS</p>
            </LocationContainer>
            <Link to={`checkout`}>
              <CheckoutContainer>
                <ShoppingCart size={24} weight="fill"/>
              </CheckoutContainer>
            </Link>
          </LocationCheckoutContainer>
        </ul>
      </nav>
    </HeaderContainer>
  )
}