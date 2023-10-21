import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WaitingListPage = () => {
  return (
    <>
      <MetaTags title="WaitingList" description="WaitingList page" />

      <h1>WaitingListPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/WaitingListPage/WaitingListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>waitingList</code>, link to me with `
        <Link to={routes.waitingList()}>WaitingList</Link>`
      </p>
    </>
  )
}

export default WaitingListPage
