import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvitesPage = () => {
  return (
    <>
      <MetaTags title="Invites" description="Invites page" />

      <h1>InvitesPage</h1>
      <p>
        Find me in <code>./web/src/pages/InvitesPage/InvitesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>invites</code>, link to me with `
        <Link to={routes.invites()}>Invites</Link>`
      </p>
    </>
  )
}

export default InvitesPage
