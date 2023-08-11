import { useState } from 'react'

import type { DeleteQuestionMutationVariables } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'

import ActionButtons from './component/ActionButtons/ActionButtons'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

const Question = ({ question }) => {
  const [isMoreMenuShowing, setIsMoreMenuShowing] = useState(false)
  const { currentUser } = useAuth()

  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
      navigate(routes.questions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteQuestionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  const toggleMoreMenu = () => {
    setIsMoreMenuShowing((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="relative grid grid-cols-[64px_1fr] gap-x-5">
        {/* more menu */}
        <div className="absolute right-0 top-0">
          <button onClick={toggleMoreMenu}>
            <Icon id="dots" />
          </button>
          {isMoreMenuShowing && (
            <div className="absolute">
              <nav>
                {/* as soon as the question is answered, the question is locked */}
                <ul>
                  {!question.answer && (
                    <li>
                      <Link
                        to={routes.editQuestion({ id: question.id })}
                        className="rw-button rw-button-blue"
                      >
                        Edit
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      type="button"
                      className="rw-button rw-button-red"
                      onClick={() => onDeleteClick(question.id)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        <div className="threaded">
          <Link to={routes.profile({ username: question.author.username })}>
            <Avatar
              name={question.author.name}
              image={question.author.avatar}
            />
          </Link>
        </div>
        <div>
          <div className="mb-3">
            <Link
              className="hover:underline"
              to={routes.profile({ username: question.author.username })}
            >
              <strong>{question.author.name}</strong>
            </Link>{' '}
            &bull;{' '}
            <Link
              className="hover:underline"
              to={routes.profile({ username: question.author.username })}
            >
              @{question.author.username}
            </Link>{' '}
            &bull; 2hr
          </div>
          <div className="mb-3 text-xl font-bold">{question.question}</div>
        </div>
        <div>
          <Link to={routes.profile({ username: question.directedAt.username })}>
            <Avatar
              name={question.directedAt.name}
              image={question.directedAt.avatar}
              size="small"
              className="mx-auto"
            />
          </Link>
        </div>
        <div>
          <div className="pt-2 text-base leading-7 [&:has(+.action-buttons)]:mb-10">
            <div className="text-sm">
              Answered by{' '}
              <Link
                to={routes.profile({ username: question.directedAt.username })}
                className="hover:underline"
              >
                <strong>{question.directedAt.name}</strong>
              </Link>{' '}
              &bull;{' '}
              <Link
                to={routes.profile({ username: question.directedAt.username })}
                className="hover:underline"
              >
                @{question.directedAt.username}
              </Link>{' '}
              &bull; 30min
            </div>
            {question.answer}
          </div>
          {currentUser && <ActionButtons question={question} />}
        </div>
      </div>
    </>
  )
}

export default Question
