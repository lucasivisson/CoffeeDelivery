import { UseFormRegister } from 'react-hook-form'
import { CheckoutData } from '../..'

type CheckoutInputType = {
  label?: string
  name: keyof CheckoutData
  type: string
  placeholder: string
  register: UseFormRegister<CheckoutData>
  valueAsNumber?: boolean
  error?: string
}

export function Input({
  label,
  name,
  type,
  placeholder,
  register,
  valueAsNumber = false,
  error,
}: CheckoutInputType) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <p>{error}</p>}
    </>
  )
}
