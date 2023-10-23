import { render } from '@redwoodjs/testing/web'

import NotificationBadge from './NotificationBadge'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationBadge', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationBadge />)
    }).not.toThrow()
  })
})
