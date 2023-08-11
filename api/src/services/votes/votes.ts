import type {
  QueryResolvers,
  MutationResolvers,
  VoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const votes: QueryResolvers['votes'] = () => {
  return db.vote.findMany()
}

export const vote: QueryResolvers['vote'] = ({ id }) => {
  return db.vote.findUnique({
    where: { id },
  })
}

export const createVote: MutationResolvers['createVote'] = ({ input }) => {
  return db.vote.create({
    data: input,
  })
}

export const updateVote: MutationResolvers['updateVote'] = ({ id, input }) => {
  return db.vote.update({
    data: input,
    where: { id },
  })
}

export const deleteVote: MutationResolvers['deleteVote'] = ({ id }) => {
  return db.vote.delete({
    where: { id },
  })
}

export const Vote: VoteRelationResolvers = {
  question: (_obj, { root }) => {
    return db.vote.findUnique({ where: { id: root?.id } }).question()
  },
  user: (_obj, { root }) => {
    return db.vote.findUnique({ where: { id: root?.id } }).user()
  },
}
