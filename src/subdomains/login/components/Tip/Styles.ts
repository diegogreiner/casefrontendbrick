import styled from 'styled-components'

export const TipContainer = styled.div`
  padding: 16px 24px;
  border-radius: 24px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  max-width: 512px;
  background-color: #fff;

  @media (max-width: 425px) {
    max-width: 345px;
    padding: 0 32px;
  }

  @media (max-width: 375px) {
    max-width: 320px;
  }

  @media (max-width: 320px) {
    max-width: 270px;
  }
`

export const TipContainerTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`

export const TipTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #1a202c;
  margin: 0;
`

export const TipDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #1a202c;
  margin: 0;
`
