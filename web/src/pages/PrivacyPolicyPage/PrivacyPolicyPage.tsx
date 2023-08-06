import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PrivacyPolicyPage = () => {
  return (
    <>
      <MetaTags title="PrivacyPolicy" description="PrivacyPolicy page" />

      <h1>PrivacyPolicyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PrivacyPolicyPage/PrivacyPolicyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>privacyPolicy</code>, link to me with `
        <Link to={routes.privacyPolicy()}>PrivacyPolicy</Link>`
      </p>
    </>
  )
}

export default PrivacyPolicyPage
