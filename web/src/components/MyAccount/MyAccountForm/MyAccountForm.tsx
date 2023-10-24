import {
  EmailField,
  Form,
  PasswordField,
  TextField,
  useForm,
} from '@redwoodjs/forms'

import Icon from 'src/components/Icon/Icon'
import { User } from 'src/types'

const UPDATE_ACCOUNT_MUTATION = gql`
  mutation UpdateAccountMutation($id: Int!, $username: String, $email: String) {
    updateUser(id: $id, input: { username: $username, email: $email }) {
      id
    }
  }
`

interface MyAccountProps {
  user: Partial<User>
}

const MyAccountForm = ({ user }: MyAccountProps) => {
  const formMethods = useForm()

  return (
    <Form className="big-form" formMethods={formMethods}>
      <fieldset>
        <div className="field">
          <label htmlFor="email">Email</label>
          <EmailField name="email" defaultValue={user.email} />
        </div>

        <div className="field">
          <label htmlFor="username">Username</label>
          <TextField name="username" defaultValue={user.username} />
        </div>

        <div className="field">
          <label htmlFor="oldPassword">Old Password</label>
          <PasswordField name="oldPassword" />
        </div>

        <div className="field">
          <label htmlFor="newPassword">New Password</label>
          <PasswordField name="newPassword" />
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <PasswordField name="confirmPassword" />
        </div>

        <div className="flex items-center justify-between">
          {/* TODO: Design a Confirm Delete Account Modal */}
          <button className="button with-icon no-bg destructive">
            <Icon id="trash" />
            Delete Account
          </button>

          <div className="flex items-center">
            <button
              className="button no-bg"
              onClick={(e) => {
                e.preventDefault()
                console.log('cancel')
                formMethods.reset()
              }}
            >
              Cancel
            </button>
            {/* TODO: Hotwire Update */}
            <button className="button solid">Update</button>
          </div>
        </div>
      </fieldset>
    </Form>
  )
}

export default MyAccountForm
