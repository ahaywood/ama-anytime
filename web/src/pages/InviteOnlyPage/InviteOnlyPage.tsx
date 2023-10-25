import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InviteOnlyPage = () => {
  return (
    <>
      <MetaTags title="InviteOnly" description="InviteOnly page" />

      <h1>InviteOnlyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InviteOnlyPage/InviteOnlyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>inviteOnly</code>, link to me with `
        <Link to={routes.inviteOnly()}>InviteOnly</Link>`
      </p>
    </>
  )
}

export default InviteOnlyPage
