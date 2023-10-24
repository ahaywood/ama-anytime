import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FollowingListCell from 'src/components/FollowingListCell'
import PageHeading from 'src/components/PageHeading/PageHeading'

interface Props {
  id: string
}

const FollowingPage = ({ id }: Props) => {
  console.log(id)
  return (
    <>
      <MetaTags title="Following" description="Following page" />

      <PageHeading heading="Amy's Following" backButtonLink={routes.feed()} />

      <FollowingListCell id={id} />
    </>
  )
}

export default FollowingPage
