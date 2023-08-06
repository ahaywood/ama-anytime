import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NotificationSettingsPage = () => {
  return (
    <>
      <MetaTags
        title="NotificationSettings"
        description="NotificationSettings page"
      />

      <h1>NotificationSettingsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/NotificationSettingsPage/NotificationSettingsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>notificationSettings</code>, link to me
        with `
        <Link to={routes.notificationSettings()}>NotificationSettings</Link>`
      </p>
    </>
  )
}

export default NotificationSettingsPage
