import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  height: 18.5rem;
  border-top-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -3rem;
  gap: 0.6rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.3rem 0.5rem;
    border-radius: 16px;
    font-size: 0.625rem;
    font-weight: bold;
  }

  .title-coffee {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .text-coffee {
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 85%;

  .dollar-sign {
    font-size: 0.875rem;
    font-weight: 400;
  }

  .coffee-price {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const ButtonsContainer = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-around;
`

export const ShoppingCartContainer = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
`

export const AddCoffeButtonContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border-radius: 8px;
  gap: 0.2rem;

  button {
    border: none;
    background-color: unset;
    width: 2rem;
    height: 2.5rem;
    font-size: 0.75rem;
  }
`
