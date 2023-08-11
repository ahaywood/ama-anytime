import { render } from '@redwoodjs/testing/web'

import RecentlyQuestion from './RecentlyQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecentlyQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentlyQuestion />)
    }).not.toThrow()
  })
})
