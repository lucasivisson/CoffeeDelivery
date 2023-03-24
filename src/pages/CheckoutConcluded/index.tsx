import {
  CheckoutConcludedInfoContainer,
  DefaultContainer,
  IconContainer,
  InfoContainer,
  TotalInfoContainer,
  HeaderContainer,
} from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import checkoutConcluded from '../../assets/checkoutConcluded.svg'
import { useProductContext } from '../../contexts/ProductContext'

export function CheckoutConcluded() {
  const { checkoutData } = useProductContext()

  return (
    <DefaultContainer>
      <HeaderContainer>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </HeaderContainer>
      <CheckoutConcludedInfoContainer>
        <TotalInfoContainer>
          <InfoContainer withoutBorder>
            <IconContainer color="purple">
              <MapPin size={18} weight="fill" />
            </IconContainer>
            <div>
              <p>
                Entrega em{' '}
                <b>
                  {checkoutData.street}, {checkoutData.number}
                </b>
              </p>
              <p>
                {checkoutData.city}, {checkoutData.uf}
              </p>
            </div>
          </InfoContainer>
          <InfoContainer>
            <IconContainer color="yellow">
              <Timer size={18} weight="fill" />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </div>
          </InfoContainer>
          <InfoContainer>
            <IconContainer color="yellow-dark">
              <CurrencyDollar size={18} weight="fill" />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <b>{checkoutData.way_to_pay}</b>
              </p>
            </div>
          </InfoContainer>
        </TotalInfoContainer>
        <div>
          <img src={checkoutConcluded} alt="" />
        </div>
      </CheckoutConcludedInfoContainer>
    </DefaultContainer>
  )
}
