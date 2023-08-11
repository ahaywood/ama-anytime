export const schema = gql`
  type Like {
    id: Int!
    question: Question!
    questionId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    likes: [Like!]! @skipAuth
    like(id: Int!): Like @skipAuth
  }

  input CreateLikeInput {
    questionId: Int!
    userId: Int!
  }

  input UpdateLikeInput {
    questionId: Int
    userId: Int
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like! @skipAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @skipAuth
    deleteLike(id: Int!): Like! @skipAuth
    deleteQuestionUserLike(questionId: Int!, userId: Int!): Like! @skipAuth
  }
`
