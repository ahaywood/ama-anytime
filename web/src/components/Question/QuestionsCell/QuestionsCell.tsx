import type { FindQuestions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Questions from 'src/components/Question/Questions'

export const QUERY = gql`
  query FindQuestions {
    questions {
      id
      question
      createdAt
      updatedAt
      answer
      authorId
      directedAtId
      archive
      reuseQuestionId
      followupQuestionId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No questions yet. '}
      <Link to={routes.newQuestion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ questions }: CellSuccessProps<FindQuestions>) => {
  return <Questions questions={questions} />
}
