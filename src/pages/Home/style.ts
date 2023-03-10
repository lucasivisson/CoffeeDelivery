import styled, { DefaultTheme } from 'styled-components'

export const DefaultContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 1rem;
  flex-direction: column;
  max-width: 72rem;
  height: 100%;
`

export const MarketingHomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 5rem 0;
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
  gap: 0.5rem;

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
`

export interface IconContainerProps {
  color: keyof DefaultTheme
}

export const IconContainer = styled.span<IconContainerProps>`
  background: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};
  border-radius: 15rem;
  padding: 0.5rem 0.6rem 0.4rem;
`

export const CoffeeListContainer = styled.body`
  margin-bottom: 5rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    margin: 3rem 0;
  }

  body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1.5rem;
  }

  .coffee-card {
    margin-top: 2rem;
  }
`
