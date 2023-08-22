import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'

const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeMutation($userId: Int!, $questionId: Int!) {
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

const CREATE_BOOKMARK_MUTATION = gql`
  mutation CreateBookmarkMutation($userId: Int!, $questionId: Int!) {
    createBookmark(input: { questionId: $questionId, userId: $userId }) {
      id
    }
  }
`

const DELETE_QUESTION_USER_BOOKMARK_MUTATION = gql`
  mutation DeleteQuestionUserBookmarkMutation(
    $questionId: Int!
    $userId: Int!
  ) {
    deleteQuestionUserBookmark(questionId: $questionId, userId: $userId) {
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
  const [bookmarkCount, setBookmarkCount] = useState(question.countBookmarks)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    question.currentUserBookmarked
  )
  const { currentUser } = useAuth()

  const [addLike, addLikeStates] = useMutation(CREATE_LIKE_MUTATION, {
    onCompleted: () => {
      setLikeCount((prevValue) => prevValue + 1)
      setIsLiked(true)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const [deleteLike, deleteLikeStates] = useMutation(
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

  const [addBookmark, addBookmarkStates] = useMutation(
    CREATE_BOOKMARK_MUTATION,
    {
      onCompleted: () => {
        setBookmarkCount((prevValue) => prevValue + 1)
        setIsBookmarked(true)
      },
      onError: (error) => {
        console.error(error)
      },
    }
  )

  const [deleteBookmark, deleteBookmarkStates] = useMutation(
    DELETE_QUESTION_USER_BOOKMARK_MUTATION,
    {
      onCompleted: () => {
        setBookmarkCount((prevValue) => prevValue - 1)
        setIsBookmarked(false)
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
    } else {
      addLike({
        variables: { questionId: question.id, userId: currentUser.id },
      })
    }
  }

  const toggleBookmark = () => {
    if (isBookmarked) {
      console.log('delete bookmark')
      deleteBookmark({
        variables: { questionId: question.id, userId: currentUser.id },
      })
    } else {
      addBookmark({
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
      <button onClick={toggleBookmark} className={isBookmarked && 'selected'}>
        <Icon id={isBookmarked ? 'bookmarkFilled' : 'bookmark'} />{' '}
        {bookmarkCount}
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
