export const schema = gql`
  type Following {
    id: Int!
    follower: User!
    followerId: Int!
    following: User!
    followingId: Int!
  }

  type Query {
    followings: [Following!]! @requireAuth
    following(id: Int!): Following @requireAuth
  }

  input CreateFollowingInput {
    followerId: Int!
    followingId: Int!
  }

  input UpdateFollowingInput {
    followerId: Int
    followingId: Int
  }

  type Mutation {
    createFollowing(input: CreateFollowingInput!): Following! @requireAuth
    updateFollowing(id: Int!, input: UpdateFollowingInput!): Following!
      @requireAuth
    deleteFollowing(id: Int!): Following! @requireAuth
  }
`
