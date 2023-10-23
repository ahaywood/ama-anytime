import { render } from '@redwoodjs/testing/web'

import ListsPage from './ListsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ListsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListsPage />)
    }).not.toThrow()
  })
})
