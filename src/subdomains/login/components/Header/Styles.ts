import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;

  @media (max-width: 425px) {
    margin-bottom: 24px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  color: #1a202c;
  margin: 0;
  padding-left: 16px;

  @media (max-width: 425px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0;
  color: #1a202c;
  padding-left: 16px;
`
