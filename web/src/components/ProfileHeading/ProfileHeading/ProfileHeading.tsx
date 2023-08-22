import { Link, routes } from '@redwoodjs/router'

import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'

const ProfileHeading = ({ user }) => {
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
            {user.name}
          </h1>
          <p className="mb-8">@{user.username}</p>

          <p className="mb-8">{user.bio}</p>

          <div className="mb-8 grid grid-cols-2 gap-x-10 gap-y-3">
            {user.location ? (
              <div className="flex items-center gap-x-1">
                <Icon id="location" />
                <div>{user.location}</div>
              </div>
            ) : (
              <div />
            )}
            {user.website ? (
              <a
                href={user.website}
                className="flex items-center gap-x-1 hover:text-hotMagenta"
                target="_blank"
                rel="noreferrer"
              >
                <Icon id="link" />
                <strong>{user.website}</strong>
              </a>
            ) : (
              <div />
            )}
            <Link
              to={routes.following({ id: 1 })}
              className="flex items-center gap-x-1 hover:text-hotMagenta"
            >
              <Icon id="user" />
              <strong>{user.following ? user.following : '0'}</strong> Following
            </Link>
            <Link
              to={routes.followers({ id: 1 })}
              className="flex items-center gap-x-1 hover:text-hotMagenta"
            >
              <Icon id="user" />
              <strong>{user.followers ? user.followers : '0'}</strong> Followers
            </Link>
          </div>

          <div className="mb-8">Followed by James Q Quick and 233 Others</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeading
