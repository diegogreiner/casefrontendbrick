import styled from 'styled-components'

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px 24px;
  border-radius: 24px;
  gap: 24px;
  min-width: 512px;

  @media (max-width: 425px) {
    min-width: 345px;
    justify-content: start;
    align-items: start;
    border-radius: 0;
    gap: 0px;
    padding-bottom: 24px;
  }

  @media (max-width: 375px) {
    min-width: 320px;
  }

  @media (max-width: 320px) {
    min-width: 270px;
  }
`
