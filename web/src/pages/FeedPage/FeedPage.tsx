import { MetaTags } from '@redwoodjs/web'

import PageHeading from 'src/components/PageHeading/PageHeading'
import Question from 'src/components/Question/Question/Question'

const FeedPage = () => {
  return (
    <>
      <MetaTags title="Feed" description="Feed page" />

      <PageHeading heading="My Feed" />
    </>
  )
}

export default FeedPage
