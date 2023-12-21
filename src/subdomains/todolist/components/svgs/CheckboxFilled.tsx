type Props = {
  onClick: () => void
}

export const CheckboxFilled = ({ onClick }: Props) => {
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
        d="M16 0.00012207H2C0.89 0.00012207 0 0.900122 0 2.00012V16.0001C0 17.1001 0.89 18.0001 2 18.0001H16C17.11 18.0001 18 17.1001 18 16.0001V2.00012C18 0.900122 17.11 0.00012207 16 0.00012207ZM7 14.0001L2 9.00012L3.41 7.59012L7 11.1701L14.59 3.58012L16 5.00012L7 14.0001Z"
        fill="#268738"
      />
    </svg>
  )
}
