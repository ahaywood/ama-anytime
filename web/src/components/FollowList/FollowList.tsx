import { User } from 'types/graphql'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface Props {
  user: User
}

const FollowList = ({ user }: Props) => {
  return (
    <div>
      <Avatar name={user.name} image={user.avatar} />
      {user.name}
      {user.username}
      <button>Follow</button>
      <Icon id="dots" />
      {user.bio}
    </div>
  )
}

export default FollowList
