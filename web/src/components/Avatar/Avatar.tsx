export interface AvatarProps {
  className?: string
  image?: string
  name?: string
  size?: 'large' | 'medium' | '42' | 'small'
}

const Avatar = ({
  className = '',
  image = '',
  name = '',
  size = 'medium',
}: AvatarProps) => {
  const initials = name ? name.slice(0, 1).toUpperCase() : ''

  const sizes = {
    large: {
      size: '160px',
      text: '48px',
    },
    medium: {
      size: '64px',
      text: '24px',
    },
    '42': {
      size: '42px',
      text: '18px',
    },
    small: {
      size: '32px',
      text: '12px',
    },
  }

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`rounded-full object-cover ${className}`}
        style={{
          width: sizes[size].size,
          height: sizes[size].size,
        }}
      />
    )
  }
  return (
    <div
      className={`center rounded-full bg-black font-bold text-white ${className}`}
      style={{
        width: sizes[size].size,
        height: sizes[size].size,
        fontSize: sizes[size].text,
      }}
    >
      {initials}
    </div>
  )
}

export default Avatar
