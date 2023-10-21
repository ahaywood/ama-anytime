import { Link, routes } from '@redwoodjs/router'

import Avatar, { AvatarProps } from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface RecentPersonSearchCardProps {
  avatar: AvatarProps
  username: string
}

const RecentPersonSearchCard = ({
  avatar,
  username,
}: RecentPersonSearchCardProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <Link to={routes.profile({ username })}>
        <Avatar {...avatar} size="42" />
      </Link>
      <Link
        to={routes.profile({ username })}
        className="flex-1 text-sm leading-5 hover:text-hotMagenta"
      >
        <strong className="font-extrabold">Amy Dutton</strong>
        <div className="font-medium">@{username}</div>
      </Link>
      <button className="hover:text-destructive">
        <Icon id="closeSmall" />
      </button>
    </div>
  )
}

export default RecentPersonSearchCard
