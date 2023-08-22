import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PageHeading from 'src/components/PageHeading/PageHeading'
import BookmarkFeedCell from 'src/components/Question/BookmarkFeedCell'

const BookmarksPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Bookmarks" description="Bookmarks page" />

      <PageHeading heading="Bookmarks" />

      <BookmarkFeedCell userId={currentUser?.id} />
    </>
  )
}

export default BookmarksPage
