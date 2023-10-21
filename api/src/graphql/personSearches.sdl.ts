export const schema = gql`
  type PersonSearch {
    id: Int!
    lookingFor: User!
    lookingForUserId: Int!
    searchedBy: User!
    userId: Int!
  }

  type Query {
    personSearches: [PersonSearch!]! @requireAuth
    personSearch(id: Int!): PersonSearch @requireAuth
    # personSearchByUser($userId: Int!): [PersonSearch!]! @requireAuth
  }

  input CreatePersonSearchInput {
    lookingForUserId: Int!
    userId: Int!
  }

  input UpdatePersonSearchInput {
    lookingForUserId: Int
    userId: Int
  }

  type Mutation {
    createPersonSearch(input: CreatePersonSearchInput!): PersonSearch!
      @requireAuth
    updatePersonSearch(
      id: Int!
      input: UpdatePersonSearchInput!
    ): PersonSearch! @requireAuth
    deletePersonSearch(id: Int!): PersonSearch! @requireAuth
  }
`
