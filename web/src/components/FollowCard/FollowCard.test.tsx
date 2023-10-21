import { render } from '@redwoodjs/testing/web'

import FollowCard from './FollowCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FollowCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowCard />)
    }).not.toThrow()
  })
})
