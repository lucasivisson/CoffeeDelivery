import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 5rem 10rem;
  gap: 2rem;
  height: 22rem;
`

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  div {
    flex: 1;
  }

  div > p:nth-child(1) {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  div > p:nth-child(2) {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }
`

export const GeneralListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ul {
    list-style-type: none;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  li:nth-child(2) {
    margin-top: 1.5rem;
  }

  li > span {
    color: ${(props) => props.theme.white};
    border-radius: 15rem;
    padding: 0.5rem 0.6rem;
  }
`

export const ShoppingCardContainer = styled.span`
  background: ${(props) => props.theme['yellow-dark']};
`

export const TimerContainer = styled.span`
  background: ${(props) => props.theme.yellow};
`

export const PackageContainer = styled.span`
  background: ${(props) => props.theme['base-text']};
`

export const CoffeeContainer = styled.span`
  background: ${(props) => props.theme.purple};
`
