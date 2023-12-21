import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 390px;
  margin: 0 auto;
`

export const Container = styled.main`
  background-color: #f7fafc;
  padding: 24px;
  flex: 1;
  width: calc(100% - 48px);
`

export const Header = styled.header`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
  color: #1a202c;
  border-bottom: 1px solid #cbd5e0;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  margin: 0;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`
