import styled from 'styled-components'
import { useContext, useState } from 'react'
import {
  ContainerManaging,
  InputTitle,
  InputDescription,
  TextContainer,
} from './Styles'
import { AddTask } from './svgs/AddTask'
import { TodoListContext } from '../context'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;

  svg {
    cursor: pointer;
  }
`

export const InsertTask = () => {
  const { insertTaskFunction } = useContext(TodoListContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleClick = () => {
    insertTaskFunction(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <ContainerManaging>
      <TextContainer>
        <InputTitle
          placeholder="Adicionar um título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <InputDescription
          placeholder="Adicionar uma descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </TextContainer>
      <IconContainer>
        <AddTask onClick={handleClick} />
      </IconContainer>
    </ContainerManaging>
  )
}
