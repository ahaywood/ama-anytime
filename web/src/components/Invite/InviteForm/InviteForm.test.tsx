import { render } from '@redwoodjs/testing/web'

import InviteForm from './InviteForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InviteForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InviteForm />)
    }).not.toThrow()
  })
})
