import { ThemeProvider } from 'styled-components'
import { TodoListProvider } from '../context'
import { TodoListInterface } from '../interfaces/TodoList'
import { theme } from '../theme'
import { ModalProvider } from '../../../shared/ModalContext'

export const TodoListContainer = () => {
  return (
    <TodoListProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <TodoListInterface />
        </ThemeProvider>
      </ModalProvider>
    </TodoListProvider>
  )
}
