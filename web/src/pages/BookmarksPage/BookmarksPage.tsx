import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BookmarksPage = () => {
  return (
    <>
      <MetaTags title="Bookmarks" description="Bookmarks page" />

      <h1>BookmarksPage</h1>
      <p>
        Find me in <code>./web/src/pages/BookmarksPage/BookmarksPage.tsx</code>
      </p>
      <p>
        My default route is named <code>bookmarks</code>, link to me with `
        <Link to={routes.bookmarks()}>Bookmarks</Link>`
      </p>
    </>
  )
}

export default BookmarksPage
