import { render } from '@redwoodjs/testing/web'

import YouMightLikeProfile from './YouMightLikeProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('YouMightLikeProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YouMightLikeProfile />)
    }).not.toThrow()
  })
})
