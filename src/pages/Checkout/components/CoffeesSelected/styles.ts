import styled from 'styled-components'

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
    font-size: 1.5rem;
    color: ${(props) => props.theme.purple};
  }

  .icon {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .icon:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  .icon {
    color: ${(props) => props.theme.purple};
    transition: all 0.2s ease-in-out;
  }

  .icon:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export interface CoffessSelectedContainerProps {
  itsFirst: boolean
}

export const CoffeesSelectedContainer = styled.div<CoffessSelectedContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin: ${(props) => (props.itsFirst ? '0rem 0rem 2rem 0rem' : '2rem 0rem')};

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
  > p {
    text-align: end;
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`

export const CoffeeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CoffeeMainBoxContainer = styled.div`
  hr {
    height: 1px;
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme['base-button']};
    margin-bottom: 1rem;
  }
`
