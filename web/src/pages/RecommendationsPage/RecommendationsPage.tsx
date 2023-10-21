import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RecommendationsPage = () => {
  return (
    <>
      <MetaTags title="Recommendations" description="Recommendations page" />

      <h1>RecommendationsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RecommendationsPage/RecommendationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>recommendations</code>, link to me with
        `<Link to={routes.recommendations()}>Recommendations</Link>`
      </p>
    </>
  )
}

export default RecommendationsPage
