import Avatar, { AvatarProps } from '../Avatar/Avatar'

interface StackedAvatarProps {
  avatars: AvatarProps[]
}

const StackedAvatar = ({ avatars }: StackedAvatarProps) => {
  return (
    <div className="flex">
      {avatars.map((avatar, index) => (
        <div
          className="-ml-2 rounded-full border-1 border-[#D4D2C6]"
          key={index}
        >
          <Avatar {...avatar} size="small" />
        </div>
      ))}
    </div>
  )
}

export default StackedAvatar
