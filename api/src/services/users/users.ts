import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const userByUsername: QueryResolvers['user'] = ({ username }) => {
  return db.user.findUnique({
    where: { username },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  questionsAuthored: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).questionsAuthored()
  },
  questionsDirectedAt: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).questionsDirectedAt()
  },
  Likes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Likes()
  },
  Bookmarks: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Bookmarks()
  },
  Invites: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Invites()
  },
  ConfirmedInvites: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Invites()
  },
  Votes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Votes()
  },
  Followers: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).followers()
  },
  Following: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).following()
  },
  countFollowers: async (_obj, { root }) => {
    const numFollowers = await db.user
      .findUnique({ where: { id: root.id } })
      .following()
    return numFollowers.length
  },
  countFollowing: async (_obj, { root }) => {
    const numFollowers = await db.user
      .findUnique({ where: { id: root.id } })
      .followers()
    return numFollowers.length
  },
  commonFollowers: async (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).followers()
  },
}
