import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionContainer};
  gap: 16px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 920px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${({ theme }) => theme.colorPrimary};
  }

  div {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.bgNumberPage};

    span {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      color: ${({ theme }) => theme.colorNumberPage};
    }
  }
`

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.bgAccordionContainer};

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-bottom: 0;
    margin-top: 0;
    gap: 8px;
  }
`

export const ContainerIntern = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Description = styled.p`
  font-size: 12px;
  padding-left: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.colorSecondary};
  margin: 0;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bgItem};
  color: ${({ theme }) => theme.colorPrimary};
`

export const Details = styled.span`
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colorPrimary};
`

export const DetailsOpenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.bgAccordionContainer};
`

export const ItemDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
