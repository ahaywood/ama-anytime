import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PrivacySafetyPage = () => {
  return (
    <>
      <MetaTags title="PrivacySafety" description="PrivacySafety page" />

      <h1>PrivacySafetyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PrivacySafetyPage/PrivacySafetyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>privacySafety</code>, link to me with `
        <Link to={routes.privacySafety()}>PrivacySafety</Link>`
      </p>
    </>
  )
}

export default PrivacySafetyPage
