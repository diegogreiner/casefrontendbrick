type Props = {
  color: string
  toogleVisibility: (visibility: boolean) => void
}

export const VisibilityOff = ({ color, toogleVisibility }: Props) => {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => toogleVisibility(true)}
    >
      <path
        d="M11 2.5C14.79 2.5 18.17 4.63 19.82 8C18.17 11.37 14.79 13.5 11 13.5C7.21 13.5 3.83 11.37 2.18 8C3.83 4.63 7.21 2.5 11 2.5ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 5.5C12.38 5.5 13.5 6.62 13.5 8C13.5 9.38 12.38 10.5 11 10.5C9.62 10.5 8.5 9.38 8.5 8C8.5 6.62 9.62 5.5 11 5.5ZM11 3.5C8.52 3.5 6.5 5.52 6.5 8C6.5 10.48 8.52 12.5 11 12.5C13.48 12.5 15.5 10.48 15.5 8C15.5 5.52 13.48 3.5 11 3.5Z"
        fill={color}
      />
    </svg>
  )
}
