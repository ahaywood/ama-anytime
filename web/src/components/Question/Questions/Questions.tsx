import type {
  DeleteQuestionMutationVariables,
  FindQuestions,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Question/QuestionsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

const QuestionsList = ({ questions }: FindQuestions) => {
  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteQuestionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Question</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Answer</th>
            <th>Author id</th>
            <th>Directed at id</th>
            <th>Archive</th>
            <th>Reuse question id</th>
            <th>Followup question id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{truncate(question.id)}</td>
              <td>{truncate(question.question)}</td>
              <td>{timeTag(question.createdAt)}</td>
              <td>{timeTag(question.updatedAt)}</td>
              <td>{truncate(question.answer)}</td>
              <td>{truncate(question.authorId)}</td>
              <td>{truncate(question.directedAtId)}</td>
              <td>{checkboxInputTag(question.archive)}</td>
              <td>{truncate(question.reuseQuestionId)}</td>
              <td>{truncate(question.followupQuestionId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.question({ id: question.id })}
                    title={'Show question ' + question.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editQuestion({ id: question.id })}
                    title={'Edit question ' + question.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete question ' + question.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(question.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuestionsList
