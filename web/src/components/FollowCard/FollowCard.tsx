import { User } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface Props {
  user: Partial<User>
  showMore?: boolean
}

const FollowCard = ({ showMore = false, user }: Props) => {
  return (
    <div className="flex w-full gap-x-3">
      <Link to={routes.profile({ username: user.username })}>
        <Avatar name={user.name} image={user.avatar} size="medium" />
      </Link>
      <div className="flex-1">
        <div className="mb-2 flex w-full justify-between">
          <Link
            to={routes.profile({ username: user.username })}
            className="leading-5 hover:text-hotMagenta"
          >
            <strong>{user.name}</strong>
            <br />@{user.username}
          </Link>
          <div className="flex items-center gap-x-4">
            <button className="button">Follow</button>
            {showMore && (
              <button>
                <Icon id="dots" />
              </button>
            )}
          </div>
        </div>

        <div className="leading-normal">{user.bio}</div>
      </div>
    </div>
  )
}

export default FollowCard
