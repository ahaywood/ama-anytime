import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Footer = () => {
  const { isAuthenticated } = useAuth()

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="pt-10 text-center text-sm">
      <nav>
        <ul className="mb-2 flex justify-center gap-x-4">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to={routes.invites()}>Invites</Link>
            </li>
          )}
          <li>
            <Link to={routes.privacyPolicy()}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={routes.termsConditions()}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={routes.disclaimers()}>Disclaimers</Link>
          </li>
        </ul>
      </nav>
      <div>
        Copyright &copy;{getCurrentYear()}.{' '}
        <a
          href="https://ahhacreative.com"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Ah Ha Creative, LLC.
        </a>{' '}
        All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
