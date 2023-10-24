import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import type { DeleteQuestionMutationVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'
import OptionsMenu, { MenuOption } from 'src/components/OptionsMenu/OptionsMenu'
import { relativeDateTime } from 'src/helpers/TimeHelpers'
import { useOutsideClick } from 'src/hooks/useClickOutside'

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
  const { currentUser, isAuthenticated } = useAuth()

  const moreMenuRef = useRef(null)
  useOutsideClick(() => setIsMoreMenuShowing(false), moreMenuRef)

  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
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
    console.log('toggle')
    setIsMoreMenuShowing((prevValue) => !prevValue)
  }

  const getQuestionMenuOptions = () => {
    const options = [] as MenuOption[]

    // if the current user is the author of the question, they can edit and delete it
    if (currentUser?.id === question.author.id) {
      options.push({
        label: 'Edit the Question',
        icon: 'pencil',
        onClick: () => console.log('edit question'),
      })
      options.push({
        label: 'Delete the Question',
        icon: 'trash',
        onClick: () => onDeleteClick(question.id),
      })
    } // Otherwise...
    else {
      // the user can follow, mute, or block the author and report the question
      options.push(
        {
          label: `Follow ${question.author.name}`,
          icon: 'follow',
          onClick: () => console.log('follow Lily Smith'),
        },
        {
          label: `Mute ${question.author.name}`,
          icon: 'mute',
          onClick: () => console.log('mute Lily Smith'),
        },
        {
          label: `Block ${question.author.name}`,
          icon: 'block',
          onClick: () => console.log('block Lily Smith'),
        },
        {
          label: 'Report the Question',
          icon: 'flag',
          onClick: () => console.log('Flag Question'),
        }
      )
    }

    return options
  }

  return (
    <>
      <div className="relative grid grid-cols-[64px_1fr] gap-x-5">
        {/* more menu */}
        {isAuthenticated && (
          <div className="absolute right-0 top-0" ref={moreMenuRef}>
            <button onClick={toggleMoreMenu} className="relative z-30">
              <Icon id="dots" />
            </button>
            <AnimatePresence>
              {isMoreMenuShowing && (
                <motion.div
                  className="absolute -right-7 top-10 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <OptionsMenu
                    close={() => setIsMoreMenuShowing(false)}
                    direction={'topRight'}
                    options={getQuestionMenuOptions()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
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
            &bull; {relativeDateTime(question.createdAt)}
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
              &bull; {relativeDateTime(question.answeredAt)}
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
