import type { NotificationsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query NotificationsQuery {
    redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ redwood }: CellSuccessProps<NotificationsQuery>) => {
  return <div>{JSON.stringify(redwood)}</div>
}
