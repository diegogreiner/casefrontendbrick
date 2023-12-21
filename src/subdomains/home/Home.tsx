import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  background-color: #f7fafc;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;

    li {
      cursor: pointer;
      list-style: none;
      padding: 10px 20px;
      background-color: #1a202c;
      color: #fff;
      border-radius: 12px;
      text-align: center;
    }
  }
`

export const Home = () => {
  const data = [
    {
      name: 'login',
      path: '/login',
    },
    {
      name: 'modal',
      path: '/modal',
    },
    {
      name: 'accordioncomponent',
      path: '/accordioncomponent',
    },
    {
      name: 'accordiontheme',
      path: '/accordiontheme',
    },
    {
      name: 'multiscreenforms',
      path: '/multiscreenforms',
    },
    {
      name: 'todolist',
      path: '/todolist',
    },
    {
      name: 'infinitescroll',
      path: '/infinitescroll',
    },
  ]

  return (
    <Container>
      <h1>Todas as funcionalidasdes feitas:</h1>
      <ul>
        {data.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{ textDecoration: 'none' }}
          >
            <li key={item.name}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </Container>
  )
}
