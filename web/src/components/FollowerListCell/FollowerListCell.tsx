import type {
  FindFollowerListQuery,
  FindFollowerListQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FollowCard from '../FollowCard/FollowCard'
import PageHeading from '../PageHeading/PageHeading'

export const QUERY = gql`
  query Redwood {
    redwood {
      version
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
  // return (
  // <>
  //   <PageHeading
  //     heading={`${user.name}'s Followers (${user.countFollowers})`}
  //   />
  //   <ul>
  //     {user?.Followers?.map((follower, index) => {
  //       console.log({ follower })
  //       return (
  //         <li key={index}>
  //           <FollowCard user={follower} />
  //         </li>
  //       )
  //     })}
  //   </ul>
  // </>
  // )
  return <div>Follower List Cell</div>
}
