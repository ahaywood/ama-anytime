export const schema = gql`
  type Question {
    id: Int!
    question: String!
    createdAt: DateTime!
    updatedAt: DateTime
    answer: String
    answeredAt: DateTime
    author: User!
    authorId: Int
    currentUserBookmarked: Boolean
    currentUserLiked: Boolean
    directedAt: User!
    directedAtId: Int
    archive: Boolean
    Likes: [Like]
    Bookmarks: [Bookmark]
    countBookmarks: Int
    countLikes: Int
    reuseQuestion: Question
    countReuses: Int
    reuseQuestionId: Int
    reusedQuestions: [Question]
    countFollowups: Int
    followupQuestion: Question
    followupQuestionId: Int
    followupQuestions: [Question]
    votes: [Vote]!
  }

  type Query {
    questions: [Question!]! @skipAuth
    question(id: Int!): Question @skipAuth
    recentQuestions(
      currentUsersId: Int
      skip: Int
      take: Int
      isAnswered: Boolean
    ): [Question!]! @skipAuth
    askedQuestionsByUser(username: String!): [Question!]! @skipAuth
    answeredQuestionsByUser(username: String!): [Question!]! @skipAuth
    unansweredQuestionsByUser(username: String!): [Question!]! @skipAuth
  }

  input CreateQuestionInput {
    question: String!
    answer: String
    answeredAt: DateTime
    authorId: Int!
    directedAtId: Int!
    archive: Boolean!
    reuseQuestionId: Int
    followupQuestionId: Int
  }

  input UpdateQuestionInput {
    question: String
    answer: String
    answeredAt: DateTime
    authorId: Int
    directedAtId: Int
    archive: Boolean
    reuseQuestionId: Int
    followupQuestionId: Int
  }

  type Mutation {
    createQuestion(input: CreateQuestionInput!): Question! @skipAuth
    updateQuestion(id: Int!, input: UpdateQuestionInput!): Question! @skipAuth
    deleteQuestion(id: Int!): Question! @skipAuth
  }
`
