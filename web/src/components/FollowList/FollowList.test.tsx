import { render } from '@redwoodjs/testing/web'

import FollowList from './FollowList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FollowList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowList />)
    }).not.toThrow()
  })
})
