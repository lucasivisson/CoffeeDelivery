import {
  CheckoutContainer,
  HeaderContainer,
  LocationCheckoutContainer,
  LocationContainer,
  StyledLink,
} from './styles'
import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useProductContext } from '../../contexts/ProductContext'

export function Header() {
  const { products } = useProductContext()

  return (
    <HeaderContainer>
      <nav>
        <ul>
          <StyledLink to={``}>
            <img src={logo} alt="" />
          </StyledLink>
          <LocationCheckoutContainer>
            <LocationContainer>
              <MapPin size={24} weight="fill" />
              <p>Porto Alegre, RS</p>
            </LocationContainer>
            <StyledLink to={`checkout`}>
              <CheckoutContainer>
                <ShoppingCart size={24} weight="fill" />
                <span>{products.length}</span>
              </CheckoutContainer>
            </StyledLink>
          </LocationCheckoutContainer>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
