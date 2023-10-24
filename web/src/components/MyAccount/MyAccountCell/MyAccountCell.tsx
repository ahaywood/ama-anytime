import type {
  FindMyAccountQuery,
  FindMyAccountQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MyAccountForm from '../MyAccountForm/MyAccountForm'

export const QUERY = gql`
  query FindMyAccountQuery($id: Int!) {
    user(id: $id) {
      email
      username
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMyAccountQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindMyAccountQuery, FindMyAccountQueryVariables>) => {
  return <MyAccountForm user={user} />
}
