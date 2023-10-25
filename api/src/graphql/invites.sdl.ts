export const schema = gql`
  type Invite {
    id: Int!
    email: String!
    inviteStatus: InviteStatus!
    inviteStatusId: Int!
    invitedBy: User!
    invitedById: Int!
    confirmedUser: User
    confirmedUserId: Int
  }

  type Query {
    invites: [Invite!]! @skipAuth
    invite(id: Int!): Invite @skipAuth
    inviteByEmail(email: String!): Invite @skipAuth
  }

  input CreateInviteInput {
    email: String!
    inviteStatusId: Int!
    invitedById: Int!
    confirmedUserId: Int
  }

  input UpdateInviteInput {
    email: String
    inviteStatusId: Int
    invitedById: Int
    confirmedUserId: Int
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @skipAuth
    updateInvite(id: Int!, input: UpdateInviteInput!): Invite! @skipAuth
    deleteInvite(id: Int!): Invite! @skipAuth
  }
`
