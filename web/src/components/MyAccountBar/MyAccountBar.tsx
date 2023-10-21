import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const MyAccountBar = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [isAccountMenuShowing, setIsAccountMenuShowing] = useState(false)

  if (isAuthenticated) {
    const toggleAccountMenu = () => {
      setIsAccountMenuShowing((prevValue) => !prevValue)
    }

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
        <div className="relative">
          <button onClick={toggleAccountMenu}>
            <Icon id="dots" />
          </button>
          {isAccountMenuShowing && (
            <div className="absolute">
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
  return <div />
}

export default MyAccountBar
