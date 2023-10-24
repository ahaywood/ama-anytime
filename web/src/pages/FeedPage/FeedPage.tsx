import { MetaTags } from '@redwoodjs/web'

import FeedCell from 'src/components/FeedCell'
import PageHeading from 'src/components/PageHeading/PageHeading'

const FeedPage = () => {
  return (
    <>
      <MetaTags title="Feed" description="Feed page" />

      <PageHeading heading="My Feed" />

      <FeedCell />
    </>
  )
}

export default FeedPage
