/* eslint-disable operator-linebreak */

import { useContext } from 'react'
import {
  ContainerCreated,
  DescriptionCreated,
  IconContainer,
  TextContainer,
  TitleCreatedContainer,
} from './Styles'
import { CheckboxEmpty } from './svgs/CheckboxEmpty'
import { EditTask } from './svgs/EditTask'
import { RemoveTask } from './svgs/RemoveTask'
import { TaskProps } from '../types'
import { Point } from './svgs/Point'
import { TodoListContext } from '../context'
import { ModalContext } from '../../../shared/ModalContext'
import { CheckboxFilled } from './svgs/CheckboxFilled'
import { formatDate } from '../helpers'

export const TaskCreated = ({
  id,
  title,
  description,
  situation,
}: TaskProps) => {
  const { setSituationFunction, removeTaskFunction } =
    useContext(TodoListContext)

  const { setModalOpen } = useContext(ModalContext)

  const handleCompletedTask = () => {
    setSituationFunction(id, 'completed')
  }

  const handleCreatedTask = () => {
    setSituationFunction(id, 'created')
  }

  const handleEditTask = () => {
    setSituationFunction(id, 'managing')
  }

  const handleRemoveTask = () => {
    setModalOpen(true)
  }

  return (
    <ContainerCreated>
      <TextContainer>
        <TitleCreatedContainer>
          {situation === 'created' && (
            <CheckboxEmpty onClick={handleCompletedTask} />
          )}
          {situation === 'completed' && (
            <CheckboxFilled onClick={handleCreatedTask} />
          )}
          <h3>{title}</h3>
          <Point color={situation === 'completed' ? '#CBD5E0' : '#1A202C'} />
          <p>{formatDate(id)}</p>
        </TitleCreatedContainer>
        <DescriptionCreated>{description}</DescriptionCreated>
      </TextContainer>
      <IconContainer>
        <EditTask onClick={handleEditTask} />
        <RemoveTask onClick={handleRemoveTask} id={id} />
      </IconContainer>
    </ContainerCreated>
  )
}
