import { Link, NavLink, routes } from '@redwoodjs/router'

import MyAccountBar from '../MyAccountBar/MyAccountBar'

const Header = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <h2>
        <Link to={routes.feed()}>Logo</Link>
      </h2>
      <nav className="flex-1">
        <ul>
          <li>
            <NavLink
              className="link"
              activeClassName="activeLink"
              to={routes.feed()}
            >
              Home
            </NavLink>
          </li>
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
              to={routes.profile()}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <MyAccountBar />
    </div>
  )
}

export default Header
