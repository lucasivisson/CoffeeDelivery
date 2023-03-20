import styled from 'styled-components'

export interface InputContainerProps {
  display?: string
  // name: string
  // width?: string
}

export const InputContainer = styled.input<InputContainerProps>`
  display: ${(props) => (props.display ? props.display : 'inline')};
  width: auto;
  /* width: ${(props) => {
    switch (props.name) {
      case 'street':
        return '100%'

      case 'number':
      case 'neighborhood':
      case 'city':
        return '40%'

      case 'complement':
        return '50%'

      case 'uf':
        return '10%'

      default:
        return 'auto'
    }
  }}; */
  /* padding: 1rem; */
  border: none;
  /* margin: 0.5rem; */
`

export const LabelInputBoxContainer = styled.div`
  input:not(.zip_code) {
    width: 100%;
  }

  .street {
    width: 100%;
  }
`
