interface IBlock {
  className?: string
  height?: string
  width?: string
}

const Block = ({
  className = '',
  height = '24',
  width = '24',
}: IBlock): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21C16.968 21 21 16.968 21 12C21 7.032 16.968 3 12 3ZM12 19.2C8.022 19.2 4.8 15.978 4.8 12C4.8 10.335 5.367 8.805 6.321 7.59L16.41 17.679C15.195 18.633 13.665 19.2 12 19.2ZM17.679 16.41L7.59 6.321C8.805 5.367 10.335 4.8 12 4.8C15.978 4.8 19.2 8.022 19.2 12C19.2 13.665 18.633 15.195 17.679 16.41Z" />
    </svg>
  )
}

export { Block }
