import type { EditQuestionById, UpdateQuestionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import QuestionForm from 'src/components/Question/QuestionForm'

export const QUERY = gql`
  query EditQuestionById($id: Int!) {
    question: question(id: $id) {
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
const UPDATE_QUESTION_MUTATION = gql`
  mutation UpdateQuestionMutation($id: Int!, $input: UpdateQuestionInput!) {
    updateQuestion(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ question }: CellSuccessProps<EditQuestionById>) => {
  const [updateQuestion, { loading, error }] = useMutation(
    UPDATE_QUESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Question updated')
        navigate(routes.questions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateQuestionInput,
    id: EditQuestionById['question']['id']
  ) => {
    updateQuestion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Question {question?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <QuestionForm
          question={question}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
