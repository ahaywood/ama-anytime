import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Icon from 'src/components/Icon/Icon'
import { QUERY as InvitationQuery } from 'src/components/Invite/InviteCell/InviteCell'

const DELETE_INVITE_MUTATION = gql`
  mutation deleteInviteMutation($id: Int!) {
    deleteInvite(id: $id) {
      id
    }
  }
`

const PendingInvite = ({ invite }) => {
  console.log({ invite })

  const [mouseOver, setMouseOver] = useState(false)

  const [deleteInvite, { loading }] = useMutation(DELETE_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite deleted')
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message)
    },
    refetchQueries: [InvitationQuery],
  })

  const handleCancelInvite = (event) => {
    event.preventDefault()
    deleteInvite({ variables: { id: invite.id } })
  }

  return (
    <div className="big-form flex items-center gap-5">
      <div className="flex-1 text-xl font-bold">{invite.email}</div>
      <button
        disabled={loading}
        className={`button with-icon small ${
          mouseOver ? 'secondary' : 'no-bg !no-underline'
        } `}
        onMouseOver={() => setMouseOver(true)}
        onFocus={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        onBlur={() => setMouseOver(false)}
        onClick={handleCancelInvite}
      >
        {mouseOver ? (
          <>
            <Icon id="cancel" />
            Cancel
          </>
        ) : (
          <>
            <div className="text-[#A3A3A3]">
              <Icon id="pending" />
            </div>
            Pending
          </>
        )}
      </button>
    </div>
  )
}

export default PendingInvite
