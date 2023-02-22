import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;

  nav > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem 1rem 10rem;
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
    padding: 0.5rem 0.5rem;
  }
`

export const LocationContainer = styled.div`
  gap: 0.3rem;
  background: ${(props) => props.theme['base-button']};
  color: ${props => props.theme['purple-dark']}; 
`

export const CheckoutContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  cursor: pointer;
`
