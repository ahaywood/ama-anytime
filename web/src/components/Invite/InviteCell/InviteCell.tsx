import type { FindInviteQuery, FindInviteQueryVariables } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import { type CellSuccessProps, type CellFailureProps } from '@redwoodjs/web'

import PageHeading from 'src/components/PageHeading/PageHeading'

import ConfirmedInvite from '../ConfirmedInvite/ConfirmedInvite'
import InviteForm from '../InviteForm/InviteForm'
import PendingInvite from '../PendingInvite/PendingInvite'

export const QUERY = gql`
  query FindInviteQuery($id: Int!) {
    user(id: $id) {
      Invites {
        id
        email
        inviteStatus {
          name
        }
        confirmedUser {
          id
          name
          avatar
          username
        }
      }
      invitations
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInviteQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindInviteQuery, FindInviteQueryVariables>) => {
  // The user doesn't have any invitations
  if (user.invitations < 1 && user.Invites.length < 1) {
    return (
      <>
        <PageHeading heading="Invitations" backButtonLink={routes.feed()} />
        <div className="page-content">No invitations</div>
      </>
    )
  }
  return (
    <>
      <PageHeading
        heading="Invitations"
        subheading={`${user.invitations} Invitation${
          user.invitations > 1 ? 's' : ''
        } Remaining`}
        backButtonLink={routes.feed()}
      />
      <div className="big-form page-content">
        <ul className="invitation-list">
          {/* loop over the number of invitations the user has available */}
          {Array.from({ length: user.invitations }).map((_, index) => (
            <li key={index}>
              <InviteForm />
            </li>
          ))}

          {/* loop over the number of invitations the user has sent out */}
          {user.Invites.map((invite) => (
            <li key={invite.email}>
              {invite.inviteStatus.name.toLowerCase() === 'confirmed' ? (
                <ConfirmedInvite invite={invite} />
              ) : (
                <PendingInvite invite={invite} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
