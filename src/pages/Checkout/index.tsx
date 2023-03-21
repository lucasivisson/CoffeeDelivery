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
  OrderBodyContainer,
  OrderSubtitleContainer,
  RadioGroupContainer,
  BoxLabelContainer,
  NeighborhoodCityUfContainer,
  NumberComplementContainer,
  InputsContainer,
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
    .typeError('O campo CEP deve ser preenchido corretamente')
    .required('O campo CEP é obrigatório')
    .test(
      'len',
      'O campo CEP deve ter no mínimo 8 caracteres',
      (val) => val.toString().length === 8,
    ),
  street: yup
    .string()
    .required('O campo Rua é obrigatório')
    .max(250, 'O campo Rua deve ter no máximo 250 caracteres'),
  number: yup
    .number()
    .typeError('O campo número deve ser preenchido corretamente')
    .required('O campo é obrigatório')
    .positive()
    .test(
      'len',
      'O campo Rua deve ter no máximo 10 caracteres',
      (val) => val.toString().length <= 10,
    ),
  complement: yup
    .string()
    .optional()
    .max(250, 'O campo Complemento deve ter no máximo 250 caracteres'),
  neighborhood: yup
    .string()
    .required('O Bairro campo é obrigatório')
    .min(1)
    .max(250, 'O campo Bairro deve ter no máximo 250 caracteres'),
  city: yup
    .string()
    .required('O campo Cidade é obrigatório')
    .min(3, 'O campo Cidade deve ter no mínimo 3 caracteres')
    .max(250, 'O campo Cidade deve ter no máximo 250 caracteres'),
  uf: yup
    .string()
    .required('O campo UF é obrigatório')
    .min(2, 'O campo UF deve ter no mínimo 2 caracteres')
    .max(2, 'O campo UF deve ter no máximo 2 caracteres'),
  way_to_pay: yup.string().required('A forma de pagamento é obrigatória'),
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
          <p>Complete seu pedido</p>
          <OrderBodyContainer>
            <OrderSubtitleContainer color="yellow-dark">
              <div>
                <MapPinLine size={20} />
              </div>
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </OrderSubtitleContainer>

            <InputsContainer>
              <Input
                name="zip_code"
                className="zip_code"
                placeholder="CEP"
                register={register}
                type="number"
                error={errors.zip_code?.message?.toString()}
                valueAsNumber={true}
                display={'block'}
              />

              <Input
                name="street"
                className="street"
                placeholder="Rua"
                register={register}
                type="text"
                error={errors.street?.message?.toString()}
                display={'block'}
              />

              <NumberComplementContainer>
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
              </NumberComplementContainer>

              <NeighborhoodCityUfContainer>
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
              </NeighborhoodCityUfContainer>
            </InputsContainer>
          </OrderBodyContainer>
          <CheckoutFooterContainer>
            <OrderSubtitleContainer color="purple">
              <div>
                <CurrencyDollar size={20} />
              </div>
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </OrderSubtitleContainer>
            <RadioGroupContainer>
              <div>
                <input
                  type="radio"
                  id="credit_card"
                  {...register('way_to_pay')}
                ></input>
                <label htmlFor="credit_card">
                  <BoxLabelContainer>
                    <div>
                      <CreditCard size={18} />
                    </div>
                    Cartão de crédito
                  </BoxLabelContainer>
                </label>
                <input
                  type="radio"
                  id="debit_card"
                  {...register('way_to_pay')}
                ></input>
                <label htmlFor="debit_card">
                  <BoxLabelContainer>
                    <div>
                      <Bank size={18} />
                    </div>
                    Cartão de débito
                  </BoxLabelContainer>
                </label>
                <input
                  type="radio"
                  id="money"
                  {...register('way_to_pay')}
                ></input>
                <label htmlFor="money">
                  <BoxLabelContainer>
                    <div>
                      <Money size={18} />
                    </div>
                    Dinheiro
                  </BoxLabelContainer>
                </label>
              </div>
              {errors?.way_to_pay && (
                <p>{errors.way_to_pay?.message?.toString()}</p>
              )}
            </RadioGroupContainer>
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
