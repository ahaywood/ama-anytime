export const schema = gql`
  type HashtagSearch {
    id: Int!
    hashtag: String!
    searchedBy: User!
    userId: Int!
  }

  type Query {
    hashtagSearches: [HashtagSearch!]! @requireAuth
    hashtagSearch(id: Int!): HashtagSearch @requireAuth
  }

  input CreateHashtagSearchInput {
    hashtag: String!
    userId: Int!
  }

  input UpdateHashtagSearchInput {
    hashtag: String
    userId: Int
  }

  type Mutation {
    createHashtagSearch(input: CreateHashtagSearchInput!): HashtagSearch!
      @requireAuth
    updateHashtagSearch(
      id: Int!
      input: UpdateHashtagSearchInput!
    ): HashtagSearch! @requireAuth
    deleteHashtagSearch(id: Int!): HashtagSearch! @requireAuth
  }
`
