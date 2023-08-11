import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'

const ADD_LIKE_MUTATION = gql`
  mutation UpdateLikeMutation($userId: Int!, $questionId: Int!) {
    createLike(input: { questionId: $questionId, userId: $userId }) {
      id
    }
  }
`

const DELETE_QUESTION_USER_LIKE_MUTATION = gql`
  mutation DeleteQuestionUserLikeMutation($questionId: Int!, $userId: Int!) {
    deleteQuestionUserLike(questionId: $questionId, userId: $userId) {
      id
      questionId
      userId
    }
  }
`

// TODO: Add loading and error states
const ActionButtons = ({ question }) => {
  const [likeCount, setLikeCount] = useState(question.countLikes)
  const [isLiked, setIsLiked] = useState<boolean>(question.currentUserLiked)
  const { currentUser } = useAuth()

  const [addLike, addLikeStates] = useMutation(ADD_LIKE_MUTATION, {
    onCompleted: () => {
      setLikeCount((prevValue) => prevValue + 1)
      setIsLiked(true)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const [deleteLike, deleteStates] = useMutation(
    DELETE_QUESTION_USER_LIKE_MUTATION,
    {
      onCompleted: () => {
        setLikeCount((prevValue) => prevValue - 1)
        setIsLiked(false)
      },
      onError: (error) => {
        console.error(error)
      },
    }
  )

  const toggleLike = () => {
    if (isLiked) {
      deleteLike({
        variables: { questionId: question.id, userId: currentUser.id },
      })
      console.log('delete like')
    } else {
      addLike({
        variables: { questionId: question.id, userId: currentUser.id },
      })
    }
  }

  return (
    <div className="action-buttons flex w-full justify-between">
      <button>
        <Icon id="comment" /> {question.countFollowups}
      </button>
      <button onClick={toggleLike} className={isLiked && 'selected'}>
        <Icon id={isLiked ? 'heartFilled' : 'heart'} /> {likeCount}
      </button>
      <button>
        <Icon id="bookmark" /> {question.countBookmarks}
      </button>
      <button>
        <Icon id="reuse" /> {question.countReuses}
      </button>
      <button>
        <Icon id="share" />
      </button>
    </div>
  )
}

export default ActionButtons
