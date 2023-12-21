/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
import { useContext } from 'react'
import { TodoListContext } from '../context'
import { TaskCreated } from './TaskCreated'
import { TaskManaging } from './TaskManaging'
import { TaskCompleted } from './TaskCompleted'

export const List = () => {
  const { tasks } = useContext(TodoListContext)

  const sortTasks = tasks.sort((a, b) => (b.id as number) - (a.id as number))

  return (
    <>
      {tasks.length > 0 &&
        sortTasks.map((task) =>
          task.situation === 'created' ? (
            <TaskCreated
              key={Number(task.id)}
              id={Number(task.id)}
              title={String(task.title)}
              description={String(task.description)}
              situation={String(task.situation)}
            />
          ) : task.situation === 'managing' ? (
            <TaskManaging
              key={Number(task.id)}
              id={Number(task.id)}
              title={String(task.title)}
              description={String(task.description)}
              situation={String(task.situation)}
            />
          ) : (
            <TaskCompleted
              key={Number(task.id)}
              id={Number(task.id)}
              title={String(task.title)}
              description={String(task.description)}
              situation={String(task.situation)}
            />
          ),
        )}
    </>
  )
}
