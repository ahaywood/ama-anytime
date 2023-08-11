import { render } from '@redwoodjs/testing/web'

import FollowersPage from './FollowersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FollowersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowersPage />)
    }).not.toThrow()
  })
})
