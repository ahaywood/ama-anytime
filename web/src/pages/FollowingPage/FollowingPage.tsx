import { MetaTags } from '@redwoodjs/web'

import PageHeading from 'src/components/PageHeading/PageHeading'

interface Props {
  id: string
}

const FollowingPage = ({ id }: Props) => {
  console.log(id)
  return (
    <>
      <MetaTags title="Following" description="Following page" />

      <PageHeading heading="Following Amy" />
    </>
  )
}

export default FollowingPage
