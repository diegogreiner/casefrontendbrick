import { useContext } from 'react'
import { AccordionContext } from '../context'

export const ChevronDown = () => {
  const { theme } = useContext(AccordionContext)

  return (
    <div>
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.910826 0.910765C1.23626 0.585328 1.7639 0.585328 2.08934 0.910765L6.50008 5.32151L10.9108 0.910765C11.2363 0.585328 11.7639 0.585328 12.0893 0.910765C12.4148 1.2362 12.4148 1.76384 12.0893 2.08928L7.08934 7.08928C6.7639 7.41471 6.23626 7.41471 5.91083 7.08928L0.910826 2.08928C0.585389 1.76384 0.585389 1.2362 0.910826 0.910765Z"
          fill={theme === 'light' ? '#1A202C' : '#fff'}
        />
      </svg>
    </div>
  )
}
