import { UseFormRegister } from 'react-hook-form'
import { CheckoutData } from '../..'
import { InputContainer, LabelInputBoxContainer } from './styles'

type CheckoutInputType = {
  label?: string
  className?: string
  name: keyof CheckoutData
  type: string
  placeholder: string
  register: UseFormRegister<CheckoutData>
  valueAsNumber?: boolean
  error?: string
  display?: string
}

export function Input({
  label,
  className,
  name,
  type,
  placeholder,
  register,
  valueAsNumber = false,
  error,
  display,
}: CheckoutInputType) {
  return (
    <LabelInputBoxContainer>
      {label && <label htmlFor={name}>{label}</label>}
      <InputContainer
        display={display}
        className={className}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <p>{error}</p>}
    </LabelInputBoxContainer>
  )
}
