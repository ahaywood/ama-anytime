import { useEffect, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ProfileHeadingCell from 'src/components/ProfileHeading/ProfileHeadingCell'

interface Props {
  id?: string
}

const ProfilePage = ({ id = '' }: Props) => {
  const [currentProfile, setCurrentProfile] = useState(id)
  const { currentUser } = useAuth()

  // if a profile is within the url, set it as the current logged in user
  // TODO: Switch from the ID to the username
  useEffect(() => {
    if (!id) {
      setCurrentProfile(currentUser?.id?.toString())
    }
    // TODO: if the user it not logged in and there's not profile within the URL -> might be able to handle within the router
  }, [currentUser, id])

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <ProfileHeadingCell id={parseInt(currentProfile)} />
    </>
  )
}

export default ProfilePage
