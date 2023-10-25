import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import InviteCell from 'src/components/Invite/InviteCell'

const InvitesPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Invites" description="Invites page" />

      {currentUser && <InviteCell id={currentUser.id} />}
    </>
  )
}

export default InvitesPage
