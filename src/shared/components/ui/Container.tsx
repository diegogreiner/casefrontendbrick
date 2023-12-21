import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f7fafc;
`

export const BodyContainer = styled.div`
  padding: 32px 0px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 80px;
  background-color: '#fff';
  color: '#1A202C';
  border-bottom: 1px solid #cbd5e0;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
    }

    p {
      margin: 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
    }
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 12px;
  }
`
