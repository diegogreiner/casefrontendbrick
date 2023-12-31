type Props = {
  onClick: () => void
}

export const EditTask = ({ onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.933594 4.50012H11.9336V6.50012H0.933594V4.50012ZM0.933594 2.50012H11.9336V0.500122H0.933594V2.50012ZM0.933594 10.5001H7.93359V8.50012H0.933594V10.5001ZM15.9436 7.37012L16.6536 6.66012C17.0436 6.27012 17.6736 6.27012 18.0636 6.66012L18.7736 7.37012C19.1636 7.76012 19.1636 8.39012 18.7736 8.78012L18.0636 9.49012L15.9436 7.37012ZM15.2336 8.08012L9.93359 13.3801V15.5001H12.0536L17.3536 10.2001L15.2336 8.08012Z"
        fill="#1A202C"
      />
    </svg>
  )
}
