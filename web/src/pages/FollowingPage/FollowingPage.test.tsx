import { render } from '@redwoodjs/testing/web'

import FollowingPage from './FollowingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FollowingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowingPage />)
    }).not.toThrow()
  })
})
