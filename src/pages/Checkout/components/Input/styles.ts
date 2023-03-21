import styled from 'styled-components'

export interface InputContainerProps {
  display?: string
}

export const InputContainer = styled.input<InputContainerProps>`
  display: ${(props) => (props.display ? props.display : 'inline')};
  width: auto;
  border: none;
`

export const LabelInputBoxContainer = styled.div`
  input:not(.zip_code) {
    width: 100%;
  }

  .street {
    width: 100%;
  }
`
