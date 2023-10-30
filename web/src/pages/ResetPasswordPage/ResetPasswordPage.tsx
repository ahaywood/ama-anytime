import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />

      <main className="pt-36">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Form onSubmit={onSubmit} className="big-form">
          <div className="field">
            <Label
              name="password"
              className="large"
              errorClassName="rw-label rw-label-error"
            >
              New Password
            </Label>
            <PasswordField
              name="password"
              autoComplete="new-password"
              errorClassName="error-message"
              disabled={!enabled}
              ref={passwordRef}
              validation={{
                required: {
                  value: true,
                  message: 'New Password is required',
                },
              }}
            />

            <FieldError name="password" className="error-message" />
          </div>

          <div className="rw-button-group">
            <Submit className="button huge" disabled={!enabled}>
              Submit
            </Submit>
          </div>
        </Form>
      </main>
    </>
  )
}

export default ResetPasswordPage
