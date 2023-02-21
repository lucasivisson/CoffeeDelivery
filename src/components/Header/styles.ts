import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: red;

  nav > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem 1rem 10rem;
  }

  ul > ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const LocationContainer = styled.ul`
  div {
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
  }

  div:first-child {
    gap: 0.3rem;
    background: ${(props) => props.theme['base-button']};
    color: ${props => props.theme['purple-dark']}; 
  }

  div:nth-child(2) {
    background: ${(props) => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
`
