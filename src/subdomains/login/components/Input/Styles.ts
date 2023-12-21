import styled from 'styled-components'

type PropsStyled = {
  hasError: boolean
  password?: boolean
}

export const InputStyled = styled.input<PropsStyled>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 8px 16px;
  border-radius: 12px;
  width: 100%;

  border: ${({ hasError, password }) =>
    hasError ? '2px solid #D95757' : password ? '2px solid #268738' : 'none'};
  color: ${({ hasError, password }) =>
    hasError ? '#D95757' : password ? '#268738' : '#1a202c'};
  background-color: ${({ hasError, password }) =>
    hasError ? '#FBEBEB' : password ? '#ECFAEE' : '#f7fafc'};

  &::placeholder {
    color: ${({ hasError, password }) =>
      hasError ? '#D95757' : password ? '#268738' : '#a0aec0'};
  }

  &:focus {
    outline: none;
    border: ${({ hasError, password }) =>
      hasError
        ? '2px solid #D95757'
        : password
          ? '2px solid #268738'
          : '2px solid #1a202c'};
  }
`
export const InputContainerStyled = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`
