import { useContext, useState } from 'react'
import {
  ContainerManaging,
  IconContainer,
  InputDescription,
  InputTitle,
  TextContainer,
} from './Styles'
import { TaskProps } from '../types'
import { TodoListContext } from '../context'
import { ModalContext } from '../../../shared/ModalContext'
import { RemoveTask } from './svgs/RemoveTask'
import { SaveTask } from './svgs/SaveTask'

export const TaskManaging = ({ id, title, description }: TaskProps) => {
  const { setTasksFunction, removeTaskFunction } = useContext(TodoListContext)

  const { setModalOpen } = useContext(ModalContext)

  const [titleState, setTitle] = useState(title)
  const [descriptionState, setDescription] = useState(description)

  const handleSaveTask = () => {
    setTasksFunction(id, titleState, descriptionState)
  }

  const handleRemoveTask = () => {
    removeTaskFunction(id)
    setModalOpen(true)
  }

  return (
    <ContainerManaging>
      <TextContainer>
        <InputTitle
          placeholder="Adicionar um título"
          onChange={(e) => setTitle(e.target.value)}
          value={titleState}
        />
        <InputDescription
          placeholder="Adicionar uma descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={descriptionState}
        />
      </TextContainer>
      <IconContainer>
        <SaveTask onClick={handleSaveTask} />
        <RemoveTask onClick={handleRemoveTask} id={id} />
      </IconContainer>
    </ContainerManaging>
  )
}
