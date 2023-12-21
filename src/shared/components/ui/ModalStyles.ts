import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(26, 32, 44, 0.65);
  z-index: 5;
`

export const ModalContainer = styled.div`
  background-color: #fff;
  gap: 16px;
  border-radius: 12px;
  padding: 24px;
  z-index: 10;

  @media (max-width: 425px) {
    margin: 0px 24px;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    opacity: 1;
    color: #1a202c;
    margin: 0;
    padding-right: 30px;
  }

  svg {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
`

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: start;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  button {
    width: 100%;
    border-radius: 12px;
    background-color: #1a202c;
    padding: 18px 0px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`
