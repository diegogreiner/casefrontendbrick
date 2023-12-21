import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding-left: 0;
  margin-left: 0;

  img {
    height: 200px;
    border-radius: 16px;
  }
`

export const List = () => {
  const [data, setData] = useState<Record<string, string>[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const infiniteScrollRef = useRef<HTMLDivElement>(null)

  const fetchImages = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=5&page=${page}`,
      )
      const result = await response.json()
      setData((prevData) => [...prevData, ...result])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        console.log('fetch more images')
        fetchImages()
      }
    })

    if (infiniteScrollRef.current) {
      intersectionObserver.observe(infiniteScrollRef.current)
    }

    return () => {
      if (infiniteScrollRef.current) {
        intersectionObserver.unobserve(infiniteScrollRef.current)
      }
    }
  }, [loading])
  return (
    <>
      <Container>
        {data.map((image) => (
          <li key={image.id}>
            <img src={image.image} alt={image.title} loading="lazy" />
          </li>
        ))}
      </Container>
      <div ref={infiniteScrollRef} />
    </>
  )
}
