import type {
  FindFollowerListQuery,
  FindFollowerListQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FollowList from '../FollowList/FollowList'
import PageHeading from '../PageHeading/PageHeading'

export const QUERY = gql`
  query FindFollowerListQuery($id: Int!) {
    user(id: $id) {
      Followers {
        follower {
          username
          name
          avatar
        }
      }
      name
      countFollowers
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindFollowerListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindFollowerListQuery, FindFollowerListQueryVariables>) => {
  console.log({ user })
  return (
    <>
      <PageHeading
        heading={`${user.name}'s Followers (${user.countFollowers})`}
      />
      <ul>
        {user?.Followers?.map((follower, index) => {
          console.log({ follower })
          return (
            <li key={index}>
              <FollowList user={follower} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
