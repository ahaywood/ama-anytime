import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProfileHeading from '../ProfileHeading/ProfileHeading'

export const QUERY = gql`
  query FindProfileHeadingQuery($username: String!) {
    userByUsername(username: $username) {
      avatar
      cover
      bio
      email
      id
      joinedDate
      location
      name
      username
      website
      # Followers {
      #   following {
      #     username
      #   }
      # }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ userByUsername }: CellSuccessProps) => {
  console.log({ userByUsername })
  return <ProfileHeading user={userByUsername} />
}
