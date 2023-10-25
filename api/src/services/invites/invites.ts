import type {
  QueryResolvers,
  MutationResolvers,
  InviteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const invites: QueryResolvers['invites'] = () => {
  return db.invite.findMany()
}

export const invite: QueryResolvers['invite'] = ({ id }) => {
  return db.invite.findUnique({
    where: { id },
  })
}

export const inviteByEmail: QueryResolvers['inviteByEmail'] = ({ email }) => {
  return db.invite.findUnique({
    where: { email },
  })
}

export const createInvite: MutationResolvers['createInvite'] = async ({
  input,
}) => {
  // TODO: Send an email, inviting the user

  // Subtract one invite from the current user
  // get the current user
  const currentUser = context.currentUser.id

  // how many invites does the current user have?
  const numInvitations = await db.user.findUnique({
    where: { id: currentUser },
    select: { invitations: true },
  })

  // add an invite for the current user
  await db.user.update({
    data: {
      invitations: numInvitations.invitations - 1,
    },
    where: { id: currentUser },
  })

  return db.invite.create({
    data: input,
  })
}

export const updateInvite: MutationResolvers['updateInvite'] = ({
  id,
  input,
}) => {
  return db.invite.update({
    data: input,
    where: { id },
  })
}

export const deleteInvite: MutationResolvers['deleteInvite'] = async ({
  id,
}) => {
  // get the current user
  const currentUser = context.currentUser.id

  // how many invites does the current user have?
  const numInvitations = await db.user.findUnique({
    where: { id: currentUser },
    select: { invitations: true },
  })

  // add an invite for the current user
  await db.user.update({
    data: {
      invitations: numInvitations.invitations + 1,
    },
    where: { id: currentUser },
  })

  // delete the existing invitation
  return db.invite.delete({
    where: { id },
  })
}

export const Invite: InviteRelationResolvers = {
  inviteStatus: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).inviteStatus()
  },
  invitedBy: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).invitedBy()
  },
  confirmedUser: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).confirmedUser()
  },
}
