import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { useOutsideClick } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
import OptionsMenu from '../OptionsMenu/OptionsMenu'

const MyAccountBar = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [isAccountMenuShowing, setIsAccountMenuShowing] = useState(false)

  const closeAccountOptions = () => {
    setIsAccountMenuShowing(false)
  }

  const toggleAccountMenu = () => {
    setIsAccountMenuShowing((prevValue) => !prevValue)
  }

  const accountMenuRef = useRef(null)
  useOutsideClick(closeAccountOptions, accountMenuRef)

  useEscapeKey(closeAccountOptions)

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-x-4 bg-whiteSmoke px-8 py-3">
        <Avatar name={currentUser.name} image={currentUser.avatar} />
        <Link
          to={routes.myProfile()}
          className="block flex-1 hover:text-hotMagenta"
        >
          <div>
            <strong>{currentUser.name}</strong>
          </div>
          <div>@{currentUser.username}</div>
        </Link>
        <div className="relative" ref={accountMenuRef}>
          <button onClick={toggleAccountMenu}>
            <Icon id="dots" />
          </button>
          <AnimatePresence>
            {isAccountMenuShowing && (
              <motion.div
                className="absolute -right-[24px] -top-[250px] w-[185px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
              >
                <OptionsMenu
                  options={[
                    {
                      label: 'My Account',
                      icon: 'account',
                      onClick: () => {
                        navigate(routes.myAccount())
                        closeAccountOptions()
                      },
                    },
                    {
                      label: 'Invites',
                      icon: 'invite',
                      onClick: () => {
                        navigate(routes.invites())
                        closeAccountOptions()
                      },
                    },
                    {
                      label: 'Privacy & Safety',
                      icon: 'shield',
                      onClick: () => {
                        navigate(routes.privacySafety())
                        closeAccountOptions()
                      },
                    },
                    {
                      label: 'Notifications',
                      icon: 'megaphone',
                      onClick: () => {
                        navigate(routes.notificationSettings())
                        closeAccountOptions()
                      },
                    },
                    {
                      label: 'Logout',
                      icon: 'logout',
                      onClick: () => {
                        navigate(routes.home())
                        logOut()
                      },
                    },
                  ]}
                  direction="bottomRight"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  }
  return <div />
}

export default MyAccountBar
