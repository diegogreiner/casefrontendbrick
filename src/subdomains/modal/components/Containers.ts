import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 0px;
  background-color: #f7fafc;
  height: calc(100vh - 80px);
  position: relative;

  @media (max-width: 425px) {
    padding: 24px 0px;
  }
`
