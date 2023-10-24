import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NotificationsCell from 'src/components/NotificationsCell'
import PageHeading from 'src/components/PageHeading/PageHeading'

const NotificationsPage = () => {
  return (
    <>
      <MetaTags title="Notifications" description="Notifications page" />

      <PageHeading heading="Notifications" backButtonLink={routes.feed()} />

      <NotificationsCell />
    </>
  )
}

export default NotificationsPage
