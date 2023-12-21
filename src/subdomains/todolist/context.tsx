/* eslint-disable function-paren-newline */
import { ReactNode, createContext, useEffect, useState } from 'react'

type InitialContext = {
  tasks: Record<string, string | number>[]
  setTasks: (tasks: Record<string, string | number>[]) => void
  insertTaskFunction: (title: string, description: string) => void
  setTasksFunction: (id: number, title: string, description: string) => void
  setSituationFunction: (id: number, situation: string) => void
  removeTaskFunction: (id: number) => void
}

export const initialContext: InitialContext = {
  tasks: [],
  setTasks: () => {},
  insertTaskFunction: () => {},
  setTasksFunction: () => {},
  setSituationFunction: () => {},
  removeTaskFunction: () => {},
}

export const TodoListContext = createContext(initialContext)

type Props = {
  children: ReactNode
}

export const TodoListProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState(initialContext.tasks)

  useEffect(() => {
    const getTasks = localStorage.getItem('tasks')
    if (getTasks !== null) {
      setTasks(JSON.parse(getTasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }, [])

  const insertTaskFunction = (title: string, description: string) => {
    const data = {
      id: new Date().getTime(),
      title,
      description,
      situation: 'created',
    }

    setTasks([...tasks, data])

    localStorage.setItem('tasks', JSON.stringify([...tasks, data]))
  }

  const setTasksFunction = (id: number, title: string, description: string) => {
    console.log('entrou')
    const data = {
      id,
      title,
      description,
      situation: 'created',
    }
    console.log('entrou 2', data)
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...data } : task,
    )
    console.log('entrou 3', updatedTasks)

    setTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const setSituationFunction = (id: number, situation: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, situation } : task,
    )

    setTasks(updatedTasks)

    if (situation === 'completed' || situation === 'created') {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
  }

  const removeTaskFunction = (id: number) => {
    const filterTask = tasks.filter((task) => task.id !== id)

    setTasks(filterTask)

    localStorage.setItem('tasks', JSON.stringify(filterTask))
  }

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        setTasks,
        insertTaskFunction,
        setTasksFunction,
        setSituationFunction,
        removeTaskFunction,
      }}
    >
      {children}
    </TodoListContext.Provider>
  )
}
