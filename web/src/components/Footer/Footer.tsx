import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="text-center">
      <nav>
        <ul className="flex gap-x-4 justify-center">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.invites()}>Invites</Link>
          </li>
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
