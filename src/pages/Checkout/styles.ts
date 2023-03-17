import styled from 'styled-components'

export const DefaultContainer = styled.div`
  margin: 2rem auto 0;
  padding: 0 1rem;
  flex-direction: row;
  max-width: 72rem;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  gap: 1rem;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`

export const SidebarContainer = styled.div`
  width: 100%;

  p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`
