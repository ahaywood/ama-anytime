import { render } from '@redwoodjs/testing/web'

import QuestionPage from './QuestionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('QuestionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionPage />)
    }).not.toThrow()
  })
})
