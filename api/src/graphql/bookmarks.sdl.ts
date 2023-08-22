export const schema = gql`
  type Bookmark {
    id: Int!
    question: Question!
    questionId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    bookmarks: [Bookmark!]! @skipAuth
    bookmark(id: Int!): Bookmark @skipAuth
    bookmarksByUser(userId: Int!): [Bookmark!]! @skipAuth
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
    createBookmark(input: CreateBookmarkInput!): Bookmark! @skipAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark! @skipAuth
    deleteBookmark(id: Int!): Bookmark! @skipAuth
    deleteQuestionUserBookmark(questionId: Int!, userId: Int!): Like! @skipAuth
  }
`
