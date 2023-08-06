import { render } from '@redwoodjs/testing/web'

import YouMightLike from './YouMightLike'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('YouMightLike', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YouMightLike />)
    }).not.toThrow()
  })
})
