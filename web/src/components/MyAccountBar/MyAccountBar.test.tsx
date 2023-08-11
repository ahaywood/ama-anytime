import { render, screen, waitFor } from '@redwoodjs/testing/web'

import MyAccountBar from './MyAccountBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyAccountBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyAccountBar />)
    }).not.toThrow()
  })

  it('does not display anything when the user is not logged in', () => {
    render(<MyAccountBar />)
    expect(screen.queryByText('Amy Dutton')).not.toBeInTheDocument()
  })

  it('when the user is logged in, display their name and username', async () => {
    mockCurrentUser({ name: 'Amy Dutton' })
    render(<MyAccountBar />)
    await waitFor(() => {
      expect(screen.getByText('Amy Dutton')).toBeInTheDocument()
    })
  })
})
