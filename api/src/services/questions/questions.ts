import type {
  QueryResolvers,
  MutationResolvers,
  QuestionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const questions: QueryResolvers['questions'] = () => {
  return db.question.findMany()
}

export const askedQuestionsByUser: QueryResolvers['questions'] = ({
  username,
}) => {
  return db.question.findMany({
    where: { author: { username } },
  })
}

export const answeredQuestionsByUser: QueryResolvers['questions'] = ({
  username,
}) => {
  return db.question.findMany({
    where: { directedAt: { username }, answer: { not: null } },
  })
}

export const unansweredQuestionsByUser: QueryResolvers['questions'] = ({
  username,
}) => {
  return db.question.findMany({
    where: { directedAt: { username }, answer: null },
  })
}

export const question: QueryResolvers['question'] = ({ id }) => {
  return db.question.findUnique({
    where: { id },
  })
}

export const createQuestion: MutationResolvers['createQuestion'] = ({
  input,
}) => {
  return db.question.create({
    data: input,
  })
}

export const updateQuestion: MutationResolvers['updateQuestion'] = ({
  id,
  input,
}) => {
  return db.question.update({
    data: input,
    where: { id },
  })
}

export const deleteQuestion: MutationResolvers['deleteQuestion'] = ({ id }) => {
  return db.question.delete({
    where: { id },
  })
}

export const recentQuestions: QueryResolvers['recentQuestions'] = ({
  currentUsersId,
  isAnswered,
  skip,
  take,
}) => {
  return db.question.findMany({
    where: {
      authorId: currentUsersId ? { not: currentUsersId } : undefined,
      answer: isAnswered ? { not: null } : null,
    },
    orderBy: { updatedAt: 'desc' },
    skip,
    take,
  })
}

export const Question: QuestionRelationResolvers = {
  author: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).author()
  },
  countBookmarks: async (_obj, { root }) => {
    const numBookmarks = await db.question
      .findUnique({ where: { id: root.id } })
      .Bookmarks()
    return numBookmarks.length
  },
  countLikes: async (_obj, { root }) => {
    const numLikes = await db.question
      .findUnique({ where: { id: root.id } })
      .Likes()
    return numLikes.length
  },
  countFollowups: async (_obj, { root }) => {
    const numFollowups = await db.question
      .findUnique({ where: { id: root.id } })
      .followupQuestions()
    return numFollowups.length
  },
  countReuses: async (_obj, { root }) => {
    const numReuses = await db.question
      .findUnique({ where: { id: root.id } })
      .reusedQuestions()
    return numReuses.length
  },
  currentUserBookmarked: async (_obj, { root }) => {
    const curBookmarks = await db.question
      .findUnique({ where: { id: root.id } })
      .Bookmarks({
        where: {
          userId: context?.currentUser?.id ? context.currentUser.id : undefined,
        },
      })
    return curBookmarks.length > 0
  },
  currentUserLiked: async (_obj, { root }) => {
    const Likes = await db.question
      .findUnique({ where: { id: root.id } })
      .Likes({
        where: {
          userId: context?.currentUser?.id ? context.currentUser.id : undefined,
        },
      })
    return Likes.length > 0
  },
  directedAt: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).directedAt()
  },
  Likes: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).Likes()
  },
  Bookmarks: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).Bookmarks()
  },
  reuseQuestion: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).reuseQuestion()
  },
  reusedQuestions: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).reusedQuestions()
  },
  followupQuestion: (_obj, { root }) => {
    return db.question
      .findUnique({ where: { id: root?.id } })
      .followupQuestion()
  },
  followupQuestions: (_obj, { root }) => {
    return db.question
      .findUnique({ where: { id: root?.id } })
      .followupQuestions()
  },
  votes: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).votes()
  },
}
