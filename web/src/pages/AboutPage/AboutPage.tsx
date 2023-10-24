import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1 className="page-title">About</h1>
      <h2 className="page-subtitle mb-9">
        AMA Anytime is an Open Source Project
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{' '}
      </p>
    </>
  )
}

export default AboutPage
