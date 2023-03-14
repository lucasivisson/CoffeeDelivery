import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 0 2.5rem 0 2.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const CoffeeListContainer = styled.div`
  width: 20rem;
`

export interface FooterContainerProps {
  haveItemsInCart?: boolean
}

export const FooterContainer = styled.footer<FooterContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;

  hr {
    display: ${(props) => (props.haveItemsInCart ? 'block' : 'none')};
    height: 1px;
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme['base-button']};
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`

export interface CurrencyContainerProps {
  itsTotal?: boolean
}

export const CurrencyContainer = styled.div<CurrencyContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.3rem;
  margin-bottom: 0.5rem;
  font-size: ${(props) => (props.itsTotal ? '1.25rem' : '0.875rem')};

  span:nth-child(2) {
    font-size: ${(props) => (props.itsTotal ? '1.25rem' : '1rem')};
  }
`
