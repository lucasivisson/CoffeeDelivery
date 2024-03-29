import styled, { DefaultTheme } from 'styled-components'

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

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const CheckoutFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.3rem;
  background: ${(props) => props.theme['base-card']};
`

export const SidebarContainer = styled.div`
  width: 100%;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const OrderBodyContainer = styled.body`
  padding: 2rem;
  border-radius: 0.3rem;
  background: ${(props) => props.theme['base-card']};
  margin-bottom: 1rem;
`

export interface OrderSubtitleContainerProps {
  color: keyof DefaultTheme
}

export const OrderSubtitleContainer = styled.div<OrderSubtitleContainerProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 2rem;

  div:first-child {
    color: ${(props) => props.theme[props.color]};
  }

  div:nth-child(2) {
    p {
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.15rem;
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }
`

export const RadioGroupContainer = styled.div`
  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 1px;
  }

  label {
    display: inline-block;
    margin-right: 1rem;
    background-color: #ddd;
    padding: 1rem;
    width: 12rem;
    border: none;
    border-radius: 0.3rem;
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.red};
  }
`

export const BoxLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;

  div {
    color: ${(props) => props.theme.purple};
  }
`

export const NumberComplementContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 1rem;
`

export const NeighborhoodCityUfContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 5rem;
  gap: 1rem;
`

export const InputsContainer = styled.div`
  & > input {
    margin-bottom: 1rem;
  }

  & > div {
    margin-bottom: 1rem;
  }

  input {
    padding: 1rem;
    color: ${(props) => props.theme['base-label']};
    background: ${(props) => props.theme['base-input']};
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.red};
  }
`
