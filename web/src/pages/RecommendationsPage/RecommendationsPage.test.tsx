import { render } from '@redwoodjs/testing/web'

import RecommendationsPage from './RecommendationsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RecommendationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecommendationsPage />)
    }).not.toThrow()
  })
})
