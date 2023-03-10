import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Sidebar } from './components/Sidebar'
import {
  CheckoutFooterContainer,
  DefaultContainer,
  OrderContainer,
} from './styles'

export function Checkout() {
  return (
    <DefaultContainer>
      <OrderContainer>
        <body>
          <p>Complete seu pedido</p>

          <span>
            <MapPinLine size={18} />
            Endereço de Entrega
          </span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <form action="">
            <input type="number" name="cep" placeholder="CEP" />
            <input type="text" name="street" placeholder="Rua" />
            <input type="number" name="number" placeholder="Número" />
            <input type="text" name="complement" placeholder="Complemento" />
            <input type="text" name="neighborhood" placeholder="Bairro" />
            <input type="text" name="city" placeholder="Cidade" />
            <input type="text" name="uf" placeholder="UF" />
          </form>
        </body>
        <CheckoutFooterContainer>
          <p>
            <CurrencyDollar size={18} />
            Pagamento
          </p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
          <div>
            <input type="radio" name="credit_card"></input>
            <label htmlFor="credit_card">
              <CreditCard size={18} />
              Cartão de crédito
            </label>
            <input type="radio" name="debit_card"></input>
            <label htmlFor="debit_card">
              <Bank size={18} />
              Cartão de débito
            </label>
            <input type="radio" name="money"></input>
            <label htmlFor="money">
              <Money size={18} />
              Dinheiro
            </label>
          </div>
        </CheckoutFooterContainer>
      </OrderContainer>
      <Sidebar />
    </DefaultContainer>
  )
}
