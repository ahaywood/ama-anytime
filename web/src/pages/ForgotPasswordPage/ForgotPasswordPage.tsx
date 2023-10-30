import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="pt-36">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Form onSubmit={onSubmit} className="big-form">
          <div className="field">
            <Label
              name="username"
              className="large"
              errorClassName="error-message"
            >
              Username
            </Label>
            <TextField
              name="username"
              errorClassName="error-message"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />

            <FieldError name="username" className="error-message" />
          </div>

          <div>
            <Submit className="button huge">Submit</Submit>
          </div>
        </Form>
      </main>
    </>
  )
}

export default ForgotPasswordPage
