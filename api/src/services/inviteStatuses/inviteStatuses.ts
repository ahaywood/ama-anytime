import type {
  QueryResolvers,
  MutationResolvers,
  InviteStatusRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const inviteStatuses: QueryResolvers['inviteStatuses'] = () => {
  return db.inviteStatus.findMany()
}

export const inviteStatus: QueryResolvers['inviteStatus'] = ({ id }) => {
  return db.inviteStatus.findUnique({
    where: { id },
  })
}

export const createInviteStatus: MutationResolvers['createInviteStatus'] = ({
  input,
}) => {
  return db.inviteStatus.create({
    data: input,
  })
}

export const updateInviteStatus: MutationResolvers['updateInviteStatus'] = ({
  id,
  input,
}) => {
  return db.inviteStatus.update({
    data: input,
    where: { id },
  })
}

export const deleteInviteStatus: MutationResolvers['deleteInviteStatus'] = ({
  id,
}) => {
  return db.inviteStatus.delete({
    where: { id },
  })
}

export const InviteStatus: InviteStatusRelationResolvers = {
  Invites: (_obj, { root }) => {
    return db.inviteStatus.findUnique({ where: { id: root?.id } }).Invites()
  },
}
