import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 15rem;
  background: ${(props) => props.theme['base-card']};
  height: 18rem;
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
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .text-coffee {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
