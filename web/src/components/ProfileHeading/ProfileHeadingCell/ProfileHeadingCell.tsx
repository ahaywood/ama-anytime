import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'

export const QUERY = gql`
  query FindProfileHeadingQuery($id: Int!) {
    user(id: $id) {
      avatar
      cover
      bio
      email
      id
      joinedDate
      location
      name
      username
      website
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps) => {
  return (
    <div className="w-full">
      <div className="relative">
        {user.cover ? (
          <img src={user.cover} alt={user.name} />
        ) : (
          <div className="h-32 w-full bg-hotMagenta" />
        )}
        <div className="absolute left-14 top-10">
          <Avatar name={user.name} image={user.avatar} size="large" />
        </div>
      </div>

      {/* content */}
      <div className="relative w-full pl-14 pr-5 pt-5">
        {/* profile buttons */}
        {/* TODO: If we're on the logged in user's profile page, hide these buttons */}
        <div className="profile-buttons flex w-full justify-end gap-x-3 pb-10">
          <button>
            <Icon id="dots" />
          </button>
          <button>
            <Icon id="comment" />
          </button>
          <button>
            <Icon id="bell" />
          </button>
          <button className="h-10 rounded-3xl !px-4 font-bold">Follow</button>
        </div>

        {/* bio details */}
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-hotMagenta">
            Amy Dutton
          </h1>
          <p className="mb-8">@selfteachme</p>

          <p className="mb-8">
            Director of Design at @codingzeal I love teaching designers how to
            code and developers how to design.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-x-10 gap-y-3">
            <div className="flex items-center gap-x-1">
              <Icon id="location" />
              <div>Nashville, TN</div>
            </div>
            <a
              href="https://youtube.com"
              className="flex items-center gap-x-1 hover:text-hotMagenta"
            >
              <Icon id="link" />
              <strong>youtube.com/selfteachme</strong>
            </a>
            <Link
              to={routes.following({ id: 1 })}
              className="flex items-center gap-x-1 hover:text-hotMagenta"
            >
              <Icon id="user" />
              <strong>60</strong> Following
            </Link>
            <Link
              to={routes.followers({ id: 1 })}
              className="flex items-center gap-x-1 hover:text-hotMagenta"
            >
              <Icon id="user" />
              <strong>13,271</strong> Followers
            </Link>
          </div>

          <div className="mb-8">Followed by James Q Quick and 233 Others</div>
        </div>
      </div>
    </div>
  )
}
