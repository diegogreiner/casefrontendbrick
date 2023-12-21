import { Modal } from '../Modal'

type Props = {
  onClick: () => void
  id: number
}

export const RemoveTask = ({ onClick, id }: Props) => {
  return (
    <>
      <Modal id={Number(id)} />
      <svg
        onClick={onClick}
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 16.0001C1 17.1001 1.9 18.0001 3 18.0001H11C12.1 18.0001 13 17.1001 13 16.0001V4.00012H1V16.0001ZM3 6.00012H11V16.0001H3V6.00012ZM10.5 1.00012L9.5 0.00012207H4.5L3.5 1.00012H0V3.00012H14V1.00012H10.5Z"
          fill="#1A202C"
        />
      </svg>
    </>
  )
}
