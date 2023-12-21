/* eslint-disable operator-linebreak */

import { useContext } from 'react'
import {
  ContainerCreated,
  DescriptionCompleted,
  IconContainer,
  TextContainer,
  TitleCompletedContainer,
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

export const TaskCompleted = ({
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
    console.log('remove', id)
    removeTaskFunction(id)
    setModalOpen(true)
  }

  return (
    <ContainerCreated>
      <TextContainer>
        <TitleCompletedContainer>
          {situation === 'created' && (
            <CheckboxEmpty onClick={handleCompletedTask} />
          )}
          {situation === 'completed' && (
            <CheckboxFilled onClick={handleCreatedTask} />
          )}
          <h3>{title}</h3>
          <Point color={situation === 'completed' ? '#CBD5E0' : '#1A202C'} />
          <p>{formatDate(id)}</p>
        </TitleCompletedContainer>
        <DescriptionCompleted>{description}</DescriptionCompleted>
      </TextContainer>
      <IconContainer>
        <EditTask onClick={handleEditTask} />
        <RemoveTask onClick={handleRemoveTask} id={id} />
      </IconContainer>
    </ContainerCreated>
  )
}
