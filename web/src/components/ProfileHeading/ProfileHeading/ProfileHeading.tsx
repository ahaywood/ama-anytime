import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'
import OptionsMenu, { MenuOption } from 'src/components/OptionsMenu/OptionsMenu'
import StackedAvatar from 'src/components/StackedAvatar/StackedAvatar'
import { useOutsideClick } from 'src/hooks/useClickOutside'
import { useCopyToClipboard } from 'src/hooks/useCopyToClipboard'
import { useEscapeKey } from 'src/hooks/useEscapeKey'
import { User } from 'src/types'

interface ProfileHeadingProps {
  user: Partial<User>
}

const ProfileHeading = ({ user }: ProfileHeadingProps) => {
  const { currentUser, isAuthenticated } = useAuth()
  const [isProfileDropdownShowing, setIsProfileDropdownShowing] =
    useState(false)
  const profileDropdownRef = useRef(null)
  const { copy } = useCopyToClipboard()

  const toggleProfileDropdownShowing = () => {
    setIsProfileDropdownShowing((prevValue) => !prevValue)
  }

  useOutsideClick(() => setIsProfileDropdownShowing(false), profileDropdownRef)
  useEscapeKey(() => setIsProfileDropdownShowing(false))

  const profileDropdownOptions = [
    {
      icon: 'link',
      label: 'Copy Link to Profile',
      onClick: () => {
        copy(window.location.href)
        toast.success('Copied to clipboard')
        setIsProfileDropdownShowing(false)
      },
    },
    {
      icon: 'mute',
      label: `Mute ${user.name}`,
      onClick: () => console.log('mute person'),
    },
    {
      icon: 'block',
      label: `Block ${user.name}`,
      onClick: () => console.log('block person'),
    },
    {
      icon: 'flag',
      label: `Report ${user.name}`,
      onClick: () => console.log('report person'),
    },
  ] as MenuOption[]

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
        <div className="profile-buttons flex w-full justify-end gap-x-3 pb-10">
          {isAuthenticated && currentUser?.username !== user.username && (
            <>
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={toggleProfileDropdownShowing}
                  className={`button ${
                    isProfileDropdownShowing ? '!bg-hotMagenta !text-white' : ''
                  }`}
                >
                  <Icon id="dots" />
                </button>
                <AnimatePresence>
                  {isProfileDropdownShowing && (
                    <motion.div
                      className="absolute -right-5 top-16"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <OptionsMenu
                        direction={'topRight'}
                        options={profileDropdownOptions}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button>
                <Icon id="comment" />
              </button>
              <button>
                <Icon id="bell" />
              </button>
              <button className="button secondary !px-4">Follow</button>
            </>
          )}
          {currentUser?.username === user.username && (
            <Link to={routes.editProfile()} className="button secondary !px-6">
              Edit Profile
            </Link>
          )}
        </div>

        {/* bio details */}
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-hotMagenta">
            {user.name}
          </h1>
          <p className="mb-8">@{user.username}</p>

          <p className="mb-8 font-medium">{user.bio}</p>

          <div className="mb-8 grid grid-cols-2 gap-x-10 gap-y-3 font-medium">
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
              <strong>10</strong> Following
            </Link>
            <Link
              to={routes.followers({ id: 1 })}
              className="flex items-center gap-x-1 hover:text-hotMagenta"
            >
              <Icon id="user" />
              <strong>10</strong> Followers
            </Link>
          </div>

          <Link
            to={routes.followers({ id: user.id })}
            className="mb-8 flex items-center gap-2 font-medium hover:text-hotMagenta"
          >
            <StackedAvatar
              avatars={[
                { image: 'https://picsum.photos/seed/1697859361132/42/42' },
                { image: 'https://picsum.photos/seed/1697859361133/42/42' },
                { image: 'https://picsum.photos/seed/1697859361134/42/42' },
              ]}
            />
            Followed by James Q Quick and 233 Others
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeading
