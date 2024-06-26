import type {
  FindFollowingListQuery,
  FindFollowingListQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
}: CellFailureProps<FindFollowingListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  followingList,
}: CellSuccessProps<
  FindFollowingListQuery,
  FindFollowingListQueryVariables
>) => {
  return <div>Following List Cell</div>
}
