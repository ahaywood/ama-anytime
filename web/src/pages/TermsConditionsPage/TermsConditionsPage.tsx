import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TermsConditionsPage = () => {
  return (
    <>
      <MetaTags title="TermsConditions" description="TermsConditions page" />

      <h1>TermsConditionsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TermsConditionsPage/TermsConditionsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>termsConditions</code>, link to me with
        `<Link to={routes.termsConditions()}>TermsConditions</Link>`
      </p>
    </>
  )
}

export default TermsConditionsPage
