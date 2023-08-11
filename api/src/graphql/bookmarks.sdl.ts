export const schema = gql`
  type Bookmark {
    id: Int!
    question: Question!
    questionId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    bookmarks: [Bookmark!]! @requireAuth
    bookmark(id: Int!): Bookmark @requireAuth
  }

  input CreateBookmarkInput {
    questionId: Int!
    userId: Int!
  }

  input UpdateBookmarkInput {
    questionId: Int
    userId: Int
  }

  type Mutation {
    createBookmark(input: CreateBookmarkInput!): Bookmark! @requireAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark!
      @requireAuth
    deleteBookmark(id: Int!): Bookmark! @requireAuth
  }
`
