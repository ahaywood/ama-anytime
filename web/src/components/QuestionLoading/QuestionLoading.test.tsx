import { render } from '@redwoodjs/testing/web'

import QuestionLoading from './QuestionLoading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('QuestionLoading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionLoading />)
    }).not.toThrow()
  })
})
