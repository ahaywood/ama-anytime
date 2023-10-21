import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ProfileHeadingCell from 'src/components/ProfileHeading/ProfileHeadingCell'
import ProfileTabs from 'src/components/ProfileTabs/ProfileTabs'

interface Props {
  tab: 'answered' | 'unanswered' | 'asked'
}

const MyProfilePage = ({ tab }: Props) => {
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="MyProfile" description="MyProfile page" />

      <ProfileHeadingCell username={currentUser?.username} />

      <ProfileTabs defaultTab={tab} />
    </>
  )
}

export default MyProfilePage
