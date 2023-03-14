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
  SidebarContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './components/Input'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../contexts/ProductContext'

const schema = yup.object().shape({
  zip_code: yup
    .number()
    .required('O campo é obrigatório')
    .test(
      'len',
      'O campo deve ter no mínimo 8 caracteres',
      (val) => val.toString().length === 8,
    ),
  street: yup
    .string()
    .required('O campo é obrigatório')
    .min(1)
    .max(250, 'O campo deve ter no máximo 250 caracteres'),
  number: yup
    .number()
    .required('O campo é obrigatório')
    .positive()
    .test(
      'len',
      'O campo deve ter no máximo 10 caracteres',
      (val) => val.toString().length <= 10,
    ),
  complement: yup.string().optional().max(250),
  neighborhood: yup
    .string()
    .required('O campo é obrigatório')
    .min(1)
    .max(250, 'O campo deve ter no máximo 250 caracteres'),
  city: yup
    .string()
    .required('O campo é obrigatório')
    .min(3, 'O campo deve ter no mínimo 3 caracteres')
    .max(250, 'O campo deve ter no máximo 250 caracteres'),
  uf: yup
    .string()
    .required('O campo é obrigatório')
    .min(2, 'O campo deve ter no mínimo 2 caracteres')
    .max(2, 'O campo deve ter no máximo 2 caracteres'),
  way_to_pay: yup.string().required('O campo é obrigatório'),
})

export interface CheckoutData {
  zip_code: number
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  uf: string
  way_to_pay: string
}

export function Checkout() {
  const { onFinishCheckout } = useProductContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutData>({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  function handleCreateNewOrder(data: CheckoutData) {
    onFinishCheckout(data)
    reset()
    navigate('/checkout-concluded')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
      <DefaultContainer>
        <OrderContainer>
          <body>
            <p>Complete seu pedido</p>

            <span>
              <MapPinLine size={18} />
              Endereço de Entrega
            </span>
            <span>Informe o endereço onde deseja receber seu pedido</span>

            <Input
              name="zip_code"
              placeholder="CEP"
              register={register}
              type="number"
              error={errors.zip_code?.message?.toString()}
              valueAsNumber={true}
            />

            <Input
              name="street"
              placeholder="Rua"
              register={register}
              type="text"
              error={errors.street?.message?.toString()}
            />

            <Input
              name="number"
              placeholder="Número"
              register={register}
              type="number"
              error={errors.number?.message?.toString()}
              valueAsNumber={true}
            />

            <Input
              name="complement"
              placeholder="Complemento"
              register={register}
              type="text"
              error={errors.complement?.message?.toString()}
            />

            <Input
              name="neighborhood"
              placeholder="Bairro"
              register={register}
              type="text"
              error={errors.neighborhood?.message?.toString()}
            />

            <Input
              name="city"
              placeholder="Cidade"
              register={register}
              type="text"
              error={errors.city?.message?.toString()}
            />

            <Input
              name="uf"
              placeholder="UF"
              register={register}
              type="text"
              error={errors.uf?.message?.toString()}
            />
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
              <input type="radio" {...register('way_to_pay')}></input>
              <label htmlFor="credit_card">
                <CreditCard size={18} />
                Cartão de crédito
              </label>
              <input type="radio" {...register('way_to_pay')}></input>
              <label htmlFor="debit_card">
                <Bank size={18} />
                Cartão de débito
              </label>
              <input type="radio" {...register('way_to_pay')}></input>
              <label htmlFor="money">
                <Money size={18} />
                Dinheiro
              </label>
            </div>
          </CheckoutFooterContainer>
        </OrderContainer>
        <SidebarContainer>
          <p>Cafés selecionados</p>
          <Sidebar />
        </SidebarContainer>
      </DefaultContainer>
    </form>
  )
}
