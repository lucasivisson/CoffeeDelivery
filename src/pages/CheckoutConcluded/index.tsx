import { DefaultContainer } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function CheckoutConcluded() {
  return (
    <DefaultContainer>
      <header>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </header>
      <main>
        <div>
          <div>
            <MapPin size={18} weight="fill" />
            <div>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <Timer size={18} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <br>20 min - 30 min</br>
              </p>
            </div>
          </div>
          <div>
            <CurrencyDollar size={18} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <br>Cartão de Crédito</br>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </main>
    </DefaultContainer>
  )
}
