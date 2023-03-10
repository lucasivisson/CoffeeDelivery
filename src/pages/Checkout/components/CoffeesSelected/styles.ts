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
