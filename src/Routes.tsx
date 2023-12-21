import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginContainer } from './subdomains/login/containers/Login'
import { ModalContainer } from './subdomains/modal/containers/Modal'
import { AccordionComponentContainer } from './subdomains/accordion/containers/AccordionComponent'
import { AccordionThemeContainer } from './subdomains/accordion/containers/AccordionTheme'
import { MultiScreenFormContainer } from './subdomains/multiscreenforms/containers/MultiScreenForm'
import { TodoListContainer } from './subdomains/todolist/containers/TodoList'
import { InfiniteScrollContainer } from './subdomains/infinitescroll/containers/InfiniteScroll'
import { Home } from './subdomains/home/Home'

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/modal" element={<ModalContainer />} />
        <Route
          path="/accordioncomponent"
          element={<AccordionComponentContainer />}
        />
        <Route path="/accordiontheme" element={<AccordionThemeContainer />} />
        <Route
          path="/multiscreenforms"
          element={<MultiScreenFormContainer />}
        />
        <Route path="/todolist" element={<TodoListContainer />} />
        <Route path="/infinitescroll" element={<InfiniteScrollContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
