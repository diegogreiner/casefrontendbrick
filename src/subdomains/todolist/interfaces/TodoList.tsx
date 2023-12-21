import {
  BodyContainer,
  Container,
} from '../../../shared/components/ui/Container'
import { HeaderContainer } from '../components/Header'
import { InsertTask } from '../components/InsertTask'
import { List } from '../components/List'

export const TodoListInterface = () => {
  return (
    <Container>
      <HeaderContainer />
      <BodyContainer>
        <InsertTask />
        <List />
      </BodyContainer>
    </Container>
  )
}
