import styled, { DefaultTheme } from 'styled-components'

export const DefaultContainer = styled.div`
  display: flex;
  margin: 2rem auto 0;
  padding: 0 1rem;
  flex-direction: column;
  max-width: 72rem;
  height: 100%;
`

export const HeaderContainer = styled.header`
  p {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3.5rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CheckoutConcludedInfoContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
`

export const TotalInfoContainer = styled.div`
  padding: 3rem 10rem 3rem 3rem;
  position: relative;

  &::before {
    content: '';
    padding: 3rem 10rem 3rem 3rem;
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding: 1px;
    border-radius: 0 2.5rem 0 2.5rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
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

export interface InfoContainerProps {
  withoutBorder?: boolean
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: ${(props) => (props.withoutBorder ? '0rem' : '3rem')};
`
