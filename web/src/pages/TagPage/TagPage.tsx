import { MetaTags } from '@redwoodjs/web'

interface TagPageProps {
  hashtag: string
}

const TagPage = ({ hashtag }: TagPageProps) => {
  console.log({ hashtag })
  return (
    <>
      <MetaTags title="Tag" description="Tag page" />

      <h1>TagPage</h1>
    </>
  )
}

export default TagPage
