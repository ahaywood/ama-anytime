import { Link, NavLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Logo from '../Logo/Logo'
import MyAccountBar from '../MyAccountBar/MyAccountBar'

const Header = () => {
  const { isAuthenticated } = useAuth()
  return (
    <header className="flex h-full flex-col justify-between">
      <h1 className="mb-8 px-8">
        <Link
          to={isAuthenticated ? routes.feed() : routes.home()}
          className="text-hotMagenta hover:text-black"
        >
          <Logo />
        </Link>
      </h1>
      <nav className="flex-1 px-8">
        <ul>
          <li>
            <NavLink
              className="link"
              activeClassName="activeLink"
              to={isAuthenticated ? routes.feed() : routes.home()}
            >
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  className="link"
                  activeClassName="activeLink"
                  to={routes.notifications()}
                >
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link"
                  activeClassName="activeLink"
                  to={routes.bookmarks()}
                >
                  Bookmarks
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link"
                  activeClassName="activeLink"
                  to={routes.myProfile()}
                >
                  Profile
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {isAuthenticated && (
          <button className="center rounded-3xl bg-hotMagenta px-5 py-3 font-bold text-white hover:bg-black">
            Ask a Question
          </button>
        )}
      </nav>
      <MyAccountBar />
    </header>
  )
}

export default Header
