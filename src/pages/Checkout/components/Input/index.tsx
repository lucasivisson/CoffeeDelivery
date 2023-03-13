import { FieldValues, UseFormRegister } from 'react-hook-form'

type CheckoutInputType = {
  label?: string
  name: string
  type: string
  placeholder: string
  register: UseFormRegister<FieldValues>
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
  console.log(error)
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...(register(name), { valueAsNumber })}
      />
      {error && <p>{error}</p>}
    </>
  )
}
