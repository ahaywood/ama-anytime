import type {
  FindGuestFeedQuery,
  FindGuestFeedQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import QuestionLoading from 'src/components/QuestionLoading/QuestionLoading'

import Question from '../Question'

export const QUERY = gql`
  query FindGuestFeedQuery {
    recentQuestions(isAnswered: true, currentUsersId: null) {
      question
      id
      createdAt
      updatedAt
      answer
      answeredAt
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

export const Loading = () => (
  <>
    <div className="border-b-2 border-b-gray-200 px-14 py-12">
      <QuestionLoading />
    </div>
    <div className="border-b-2 border-b-gray-200 px-14 py-12">
      <QuestionLoading />
    </div>
    <div className="border-b-2 border-b-gray-200 px-14 py-12">
      <QuestionLoading />
    </div>
  </>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindGuestFeedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recentQuestions,
}: CellSuccessProps<FindGuestFeedQuery, FindGuestFeedQueryVariables>) => {
  return (
    <ul className="mb-10 flex flex-col">
      {recentQuestions.map((question, index) => (
        <li key={index} className="border-b-2 border-b-black px-14 py-12">
          <Question question={question} />
        </li>
      ))}
    </ul>
  )
}
