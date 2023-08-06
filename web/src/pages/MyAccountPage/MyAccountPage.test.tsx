import { render } from '@redwoodjs/testing/web'

import MyAccountPage from './MyAccountPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyAccountPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyAccountPage />)
    }).not.toThrow()
  })
})
