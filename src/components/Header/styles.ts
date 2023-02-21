import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: yellow;

  nav > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem 1rem 10rem;
  }

  ul > div {
    display: flex;
    align-items: center;
  }

  ul > ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
