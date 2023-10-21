import { render } from '@redwoodjs/testing/web'

import RecentPersonSearchCard from './RecentPersonSearchCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecentPersonSearchCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentPersonSearchCard />)
    }).not.toThrow()
  })
})
