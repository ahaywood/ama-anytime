import { render } from '@redwoodjs/testing/web'

import HalfAndHalfLayout from './HalfAndHalfLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HalfAndHalfLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HalfAndHalfLayout />)
    }).not.toThrow()
  })
})
