import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import MyAccountCell from 'src/components/MyAccount/MyAccountCell'
import PageHeading from 'src/components/PageHeading/PageHeading'

const MyAccountPage = () => {
  const { currentUser } = useAuth()
  console.log({ currentUser })

  return (
    <>
      <MetaTags title="MyAccount" description="MyAccount page" />

      <PageHeading heading="My Account" backButtonLink={routes.feed()} />

      <div className="px-16 pt-11">
        {currentUser && <MyAccountCell id={currentUser.id} />}
      </div>
    </>
  )
}

export default MyAccountPage
