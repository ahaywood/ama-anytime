import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyProfilePage = () => {
  return (
    <>
      <MetaTags title="MyProfile" description="MyProfile page" />

      <h1>MyProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/MyProfilePage/MyProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>myProfile</code>, link to me with `
        <Link to={routes.myProfile()}>MyProfile</Link>`
      </p>
    </>
  )
}

export default MyProfilePage
