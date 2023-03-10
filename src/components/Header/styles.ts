import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  width: 100vw;

  nav > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 8rem 1rem 8rem;
  }
  ul > img {
    cursor: pointer;
  }

  ul > ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const LocationCheckoutContainer = styled.ul`
  div {
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
`

export const LocationContainer = styled.div`
  gap: 0.3rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CheckoutContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  span {
    margin: -2rem -1.2rem 0 0;
    border: none;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 0.75rem;
    border-radius: 16px;
    padding: 0.2rem 0.4rem;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
