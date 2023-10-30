import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.feed())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="pt-36">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <Form onSubmit={onSubmit} className="big-form">
          <div className="field">
            <Label
              name="username"
              errorClassName="error-message"
              className="large"
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

            <FieldError name="username" className="rw-field-error" />
          </div>

          <div className="field">
            <div className="flex items-center justify-between">
              <Label
                name="password"
                errorClassName="error-message"
                className="large"
              >
                Password
              </Label>
              <Link
                to={routes.forgotPassword()}
                className="underline hover:no-underline"
              >
                Forgot?
              </Link>
            </div>
            <PasswordField
              name="password"
              errorClassName="error-message"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
          </div>

          <FieldError name="password" className="rw-field-error" />

          <Submit className="button huge ">Login</Submit>
        </Form>
      </main>
    </>
  )
}

export default LoginPage
