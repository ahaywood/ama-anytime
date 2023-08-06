import { render } from '@redwoodjs/testing/web'

import InvitesPage from './InvitesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvitesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvitesPage />)
    }).not.toThrow()
  })
})
