export const schema = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    name: String
    bio: String
    location: String
    website: String
    cover: String
    avatar: String
    joinedDate: DateTime!
    lastLogin: DateTime
    clearNotifications: DateTime
    invitations: Int
    countFollowers: Int
    countFollowing: Int
    commonFollowers: [Following]!
    questionsAuthored: [Question]!
    questionsDirectedAt: [Question]!
    Likes: [Like]!
    Bookmarks: [Bookmark]!
    Votes: [Vote]!
    Following: [Following]!
    Followers: [Following]!
    Invites: [Invite]!
    ConfirmedInvite: [Invite]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
    userByUsername(username: String!): User @skipAuth
  }

  input CreateUserInput {
    username: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    name: String
    bio: String
    location: String
    website: String
    cover: String
    avatar: String
    joinedDate: DateTime!
    lastLogin: DateTime
    clearNotifications: DateTime
    invitations: Int
  }

  input UpdateUserInput {
    username: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    name: String
    bio: String
    location: String
    website: String
    cover: String
    avatar: String
    joinedDate: DateTime
    lastLogin: DateTime
    clearNotifications: DateTime
    invitations: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
