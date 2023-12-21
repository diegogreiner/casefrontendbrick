type Props = {
  onClick: () => void
}

export const CheckboxEmpty = ({ onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2.00012V16.0001H2V2.00012H16ZM16 0.00012207H2C0.9 0.00012207 0 0.900122 0 2.00012V16.0001C0 17.1001 0.9 18.0001 2 18.0001H16C17.1 18.0001 18 17.1001 18 16.0001V2.00012C18 0.900122 17.1 0.00012207 16 0.00012207Z"
        fill="#1A202C"
      />
    </svg>
  )
}
