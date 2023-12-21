import styled from 'styled-components'

export const Container = styled.section`
  background-color: #f7fafc;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 425px) {
    background-color: #fff;
    justify-content: start;
    gap: 0;
  }
`
