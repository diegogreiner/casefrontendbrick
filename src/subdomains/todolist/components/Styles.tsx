import styled from 'styled-components'

export const ContainerManaging = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  padding: 16px 16px 16px 32px;
  border-radius: 12px;
  gap: 32px;
  display: flex;
  justify-content: space-between;
  max-width: calc(1280px - 16px);
  min-width: calc(1280px - 16px);
`

export const ContainerCreated = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  padding: 16px;
  border-radius: 12px;
  gap: 32px;
  display: flex;
  justify-content: space-between;
  min-width: 1280px;
  max-width: 1280px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: calc(100% - 96px);
`

export const TitleCreatedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h3,
  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg:first-child {
    cursor: pointer;
  }
`

export const TitleCompletedContainer = styled(TitleCreatedContainer)`
  h3 {
    color: ${({ theme }) => theme.colorCompleted};
  }

  p {
    color: ${({ theme }) => theme.colorDescCompleted};
  }
`

export const DescriptionCreated = styled.p`
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.colorCreated};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  height: 63px;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const DescriptionCompleted = styled(DescriptionCreated)`
  color: ${({ theme }) => theme.colorDescCompleted};
`

export const InputTitle = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.colorManaging};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  flex: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorManaging};
  }
`

export const InputDescription = styled.textarea`
  border: none;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.colorManaging};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  resize: none;
  height: 63px;
  flex: 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorManaging};
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 56px;

  svg {
    cursor: pointer;
  }
`
