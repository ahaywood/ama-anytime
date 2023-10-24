import {
  bookmarksByUserQuery,
  bookmarksByUserQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Question from '../Question'

// import Question from '../Question'

export const QUERY = gql`
  query bookmarksByUserQuery($userId: Int!) {
    bookmarksByUser(userId: $userId) {
      question {
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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  bookmarksByUser,
}: CellSuccessProps<bookmarksByUserQuery, bookmarksByUserQueryVariables>) => {
  return (
    <ul className="mb-10 flex flex-col">
      {bookmarksByUser.map((bookmark, index) => (
        <li key={index} className="border-b-2 border-b-black px-14 py-12">
          <Question question={bookmark.question} />
        </li>
      ))}
    </ul>
  )
}
