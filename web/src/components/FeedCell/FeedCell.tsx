import type { FindFeedQuery, FindFeedQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindFeedQuery {
    redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindFeedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  redwood,
}: CellSuccessProps<FindFeedQuery, FindFeedQueryVariables>) => {
  return <div>{JSON.stringify(redwood)}</div>
}
