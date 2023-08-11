import { MetaTags } from '@redwoodjs/web'

import PageHeading from 'src/components/PageHeading/PageHeading'

interface Props {
  id: string
}

const FollowersPage = ({ id }: Props) => {
  console.log(id)
  return (
    <>
      <MetaTags title="Followers" description="Followers page" />

      <PageHeading heading="Amy's Followers" />
    </>
  )
}

export default FollowersPage
