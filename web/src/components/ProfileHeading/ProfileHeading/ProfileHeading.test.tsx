import { render } from '@redwoodjs/testing/web'

import ProfileHeading from './ProfileHeading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileHeading />)
    }).not.toThrow()
  })
})
