import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ListsPage = () => {
  return (
    <>
      <MetaTags title="Lists" description="Lists page" />

      <h1>ListsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ListsPage/ListsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>lists</code>, link to me with `
        <Link to={routes.lists()}>Lists</Link>`
      </p>
    </>
  )
}

export default ListsPage
