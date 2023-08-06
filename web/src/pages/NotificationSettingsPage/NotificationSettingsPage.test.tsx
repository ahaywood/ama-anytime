import { render } from '@redwoodjs/testing/web'

import NotificationSettingsPage from './NotificationSettingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NotificationSettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationSettingsPage />)
    }).not.toThrow()
  })
})
