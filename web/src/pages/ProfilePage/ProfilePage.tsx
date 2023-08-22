import { useEffect, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ProfileHeadingCell from 'src/components/ProfileHeading/ProfileHeadingCell'
import ProfileTabs from 'src/components/ProfileTabs/ProfileTabs'

interface Props {
  username: string
  tab: 'answered' | 'unanswered' | 'asked'
}

const ProfilePage = ({ username, tab }: Props) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <ProfileHeadingCell username={username} />

      <ProfileTabs defaultTab={tab} />
    </>
  )
}

export default ProfilePage
