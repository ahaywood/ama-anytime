import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EditProfileCell from 'src/components/EditProfileCell'

const EditProfilePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="EditProfile" description="EditProfile page" />

      {currentUser && <EditProfileCell id={currentUser.id} />}
    </>
  )
}

export default EditProfilePage
