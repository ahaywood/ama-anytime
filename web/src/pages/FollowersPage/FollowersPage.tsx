import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FollowerListCell from 'src/components/FollowerListCell'
import PageHeading from 'src/components/PageHeading/PageHeading'

interface Props {
  id: string
}

const FollowersPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Followers" description="Followers page" />

      <PageHeading heading="Amy's Followers" backButtonLink={routes.feed()} />

      <FollowerListCell id={id} />
    </>
  )
}

export default FollowersPage
