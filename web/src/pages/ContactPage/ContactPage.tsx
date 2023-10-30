import {
  EmailField,
  Form,
  Label,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <main>
        <Form className="big-form">
          <div className="field">
            <Label name="firstName" htmlFor="firstName">
              First Name
            </Label>
            <TextField name="firstName" />
          </div>
          <div className="field">
            <Label name="email" htmlFor="email">
              Email Address
            </Label>
            <EmailField name="email" />
          </div>
          <div className="field">
            <Label name="username" htmlFor="username">
              Username
            </Label>
            <TextField name="username" />
          </div>
          <div className="field">
            <Label name="message" htmlFor="message">
              Message
            </Label>
            <TextAreaField name="message" />
          </div>
          <div className="flex justify-end">
            <button className="button !rounded-full !px-16 !py-4">Send</button>
          </div>
        </Form>
      </main>
    </>
  )
}

export default ContactPage
