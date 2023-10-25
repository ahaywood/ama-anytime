import { EmailField, Form, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'
import { QUERY as FindInviteQuery } from 'src/components/Invite/InviteCell/InviteCell'

export const ADD_INVITE_MUTATION = gql`
  mutation AddInviteMutation($email: String!, $invitedById: Int!) {
    createInvite(
      input: { email: $email, inviteStatusId: 2, invitedById: $invitedById }
    ) {
      id
      email
    }
  }
`

const InviteForm = () => {
  const { currentUser } = useAuth()
  const formMethods = useForm()

  const [addInvite, { loading }] = useMutation(ADD_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite sent')
      formMethods.reset()
      // TODO: When an invite is added, remove 1 invitation from the current user
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message)
    },
  })

  const handleAddInvite = (data) => {
    addInvite({
      variables: { email: data.email, invitedById: currentUser.id },
      refetchQueries: [FindInviteQuery],
    })
  }

  return (
    <Form
      formMethods={formMethods}
      className="big-form flex w-full items-center gap-4"
      onSubmit={handleAddInvite}
    >
      <EmailField name="email" placeholder="Email Address" />
      <div>
        <button className="button with-icon small" disabled={loading}>
          <Icon id="invite" />
          Invite
        </button>
      </div>
    </Form>
  )
}

export default InviteForm
