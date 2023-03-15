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

  .minus {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }

  .minus:hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  .plus {
    cursor: pointer;
  }

  .plus:hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: all 0.2s ease-in-out;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CoffeesSelectedContainer = styled.div`
  /* display: flex;
  flex-direction: colum;
  justify-content: space-between;
  align-items: flex-start; */
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin: 1rem 0;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
  > p {
    text-align: end;
  }
`

export const CoffeeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
