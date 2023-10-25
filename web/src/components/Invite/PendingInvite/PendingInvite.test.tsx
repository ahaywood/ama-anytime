import { render } from '@redwoodjs/testing/web'

import PendingInvite from './PendingInvite'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PendingInvite', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PendingInvite />)
    }).not.toThrow()
  })
})
