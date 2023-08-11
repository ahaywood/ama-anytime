import { MetaTags } from '@redwoodjs/web'

import PageHeading from 'src/components/PageHeading/PageHeading'
import GuestFeedCell from 'src/components/Question/GuestFeedCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <PageHeading heading="Most Recent" />

      <GuestFeedCell />
    </>
  )
}

export default HomePage
