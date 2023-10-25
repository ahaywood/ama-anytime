import { render } from '@redwoodjs/testing/web'

import ConfirmedInvite from './ConfirmedInvite'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmedInvite', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmedInvite />)
    }).not.toThrow()
  })
})
