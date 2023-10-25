export const schema = gql`
  type InviteStatus {
    id: Int!
    name: String!
    Invites: [Invite]!
  }

  type Query {
    inviteStatuses: [InviteStatus!]! @requireAuth
    inviteStatus(id: Int!): InviteStatus @requireAuth
  }

  input CreateInviteStatusInput {
    name: String!
  }

  input UpdateInviteStatusInput {
    name: String
  }

  type Mutation {
    createInviteStatus(input: CreateInviteStatusInput!): InviteStatus!
      @requireAuth
    updateInviteStatus(
      id: Int!
      input: UpdateInviteStatusInput!
    ): InviteStatus! @requireAuth
    deleteInviteStatus(id: Int!): InviteStatus! @requireAuth
  }
`
