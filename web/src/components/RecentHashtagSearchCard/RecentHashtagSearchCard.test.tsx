import { render } from '@redwoodjs/testing/web'

import RecentHashtagSearchCard from './RecentHashtagSearchCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecentHashtagSearchCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentHashtagSearchCard />)
    }).not.toThrow()
  })
})
