import { MetaTags } from '@redwoodjs/web'

import FollowerListCell from 'src/components/FollowerListCell'

interface Props {
  id: string
}

const FollowersPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Followers" description="Followers page" />
      <FollowerListCell id={id} />
    </>
  )
}

export default FollowersPage
