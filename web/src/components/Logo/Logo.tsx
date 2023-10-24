interface LogoProps {
  style?: 'onWhite' | 'onDark' | 'onPink'
}

const Logo = ({ style = 'onWhite' }: LogoProps) => {
  const styles = {
    onWhite: {
      primary: '#FF00BF',
      alternate: '#3D0042',
    },
    onDark: {
      primary: '#FF00BF',
      alternate: '#3D0042',
    },
    onPink: {
      primary: '#FFFFFF',
      alternate: '#3D0042',
    },
  }

  return (
    <svg
      width="95"
      height="83"
      viewBox="0 0 95 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 65.5L19 82.5L9.5 67L21 47L29 65.5Z"
        fill={styles[style]['alternate']}
      />
      <path
        d="M67 65.5L57 82.5L47 67L58.5 47L67 65.5Z"
        fill={styles[style]['alternate']}
      />
      <path
        d="M38.5 16.5L47.5 0.5L95 82H76.5L38.5 16.5Z"
        fill={styles[style]['primary']}
      />
      <path
        d="M19 50.5L28.5 33.5L57 82.5H38.5L19 50.5Z"
        fill={styles[style]['primary']}
      />
      <path d="M0 82.5L9.5 67L19 82.5H0Z" fill={styles[style]['primary']} />
    </svg>
  )
}

export default Logo
