import type { AskedQuestionsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Question from 'src/components/Question/Question'

export const QUERY = gql`
  query AskedQuestionsQuery($username: String!) {
    askedQuestionsByUser(username: $username) {
      question
      id
      createdAt
      updatedAt
      answer
      countBookmarks
      countLikes
      countFollowups
      countReuses
      currentUserLiked
      currentUserBookmarked
      author {
        id
        username
        name
        avatar
      }
      directedAt {
        id
        username
        name
        avatar
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  askedQuestionsByUser,
}: CellSuccessProps<AskedQuestionsQuery>) => {
  return (
    <ul className="mb-10 flex flex-col">
      {askedQuestionsByUser.map((question, index: number) => (
        <li key={index} className="border-b-2 border-b-black px-14 py-12">
          <Question question={question} />
        </li>
      ))}
    </ul>
  )
}
