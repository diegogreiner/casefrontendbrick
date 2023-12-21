import { useContext } from 'react'
import { AccordionContext } from '../context'

export const ChevronUp = () => {
  const { theme } = useContext(AccordionContext)

  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9107 6.91083C10.2361 6.58539 10.7638 6.58539 11.0892 6.91083L16.0892 11.9108C16.4147 12.2363 16.4147 12.7639 16.0892 13.0893C15.7638 13.4148 15.2361 13.4148 14.9107 13.0893L10.5 8.67859L6.08921 13.0893C5.76378 13.4148 5.23614 13.4148 4.9107 13.0893C4.58527 12.7639 4.58527 12.2363 4.9107 11.9108L9.9107 6.91083Z"
        fill={theme === 'light' ? '#1A202C' : '#fff'}
      />
    </svg>
  )
}
