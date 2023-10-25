import { useRef } from 'react'
import { useEffect } from 'react'

import { useLazyQuery, useMutation } from '@apollo/client'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const INVITE_BY_EMAIL_QUERY = gql`
  query inviteByEmail($email: String!) {
    inviteByEmail(email: $email) {
      id
    }
  }
`

const CONFIRM_INVITE_MUTATION = gql`
  mutation ConfirmInviteMutation($id: Int!, $currentUser: Int!) {
    updateInvite(
      id: $id
      input: { inviteStatusId: 1, confirmedUserId: $currentUser }
    ) {
      id
    }
  }
`

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  const [checkInvite, { loading }] = useLazyQuery(INVITE_BY_EMAIL_QUERY)
  const [updateInvite] = useMutation(CONFIRM_INVITE_MUTATION)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const firstFieldFocusRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    firstFieldFocusRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    // check to see if the user has been invited
    const invite = await checkInvite({ variables: { email: data.email } })

    // if the user hasn't been invited, redirect to the invite only page
    if (!invite.data.inviteByEmail) {
      navigate(routes.inviteOnly())
      return
    }

    const response = await signUp({
      username: data.username,
      password: data.password,
      name: data.name,
      email: data.email,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // Set the invite to confirmed
      updateInvite({
        variables: {
          id: invite.data.inviteByEmail.id,
          currentUser: response.id,
        },
      })
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <fieldset disabled={loading}>
                    <Label
                      name="name"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      Name
                    </Label>
                    <TextField
                      name="name"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      ref={firstFieldFocusRef}
                      validation={{
                        required: {
                          value: true,
                          message: 'Name is required',
                        },
                      }}
                    />
                    <FieldError name="name" className="rw-field-error" />

                    <Label
                      name="username"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      Username
                    </Label>
                    <TextField
                      name="username"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      validation={{
                        required: {
                          value: true,
                          message: 'Username is required',
                        },
                      }}
                    />
                    <FieldError name="username" className="rw-field-error" />

                    <Label
                      name="email"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      Email
                    </Label>
                    <TextField
                      name="email"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      ref={firstFieldFocusRef}
                      validation={{
                        required: {
                          value: true,
                          message: 'Username is required',
                        },
                      }}
                    />
                    <FieldError name="email" className="rw-field-error" />

                    <Label
                      name="password"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      Password
                    </Label>
                    <PasswordField
                      name="password"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      autoComplete="current-password"
                      validation={{
                        required: {
                          value: true,
                          message: 'Password is required',
                        },
                      }}
                    />
                    <FieldError name="password" className="rw-field-error" />

                    <div className="rw-button-group">
                      <Submit className="rw-button rw-button-blue">
                        Sign Up
                      </Submit>
                    </div>
                  </fieldset>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
