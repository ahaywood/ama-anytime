import { render } from '@redwoodjs/testing/web'

import InviteOnlyPage from './InviteOnlyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InviteOnlyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InviteOnlyPage />)
    }).not.toThrow()
  })
})
