export const schema = gql`
  type Vote {
    id: Int!
    question: Question!
    questionId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    votes: [Vote!]! @requireAuth
    vote(id: Int!): Vote @requireAuth
  }

  input CreateVoteInput {
    questionId: Int!
    userId: Int!
  }

  input UpdateVoteInput {
    questionId: Int
    userId: Int
  }

  type Mutation {
    createVote(input: CreateVoteInput!): Vote! @requireAuth
    updateVote(id: Int!, input: UpdateVoteInput!): Vote! @requireAuth
    deleteVote(id: Int!): Vote! @requireAuth
  }
`
