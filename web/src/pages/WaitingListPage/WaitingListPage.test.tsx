import { render } from '@redwoodjs/testing/web'

import WaitingListPage from './WaitingListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WaitingListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WaitingListPage />)
    }).not.toThrow()
  })
})
