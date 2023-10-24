import { render } from '@redwoodjs/testing/web'

import HalfAndHalfWithTitleLayout from './HalfAndHalfWithTitleLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HalfAndHalfWithTitleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HalfAndHalfWithTitleLayout />)
    }).not.toThrow()
  })
})
