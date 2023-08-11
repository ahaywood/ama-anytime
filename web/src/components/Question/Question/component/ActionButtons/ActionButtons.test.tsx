import { render } from '@redwoodjs/testing/web'

import ActionButtons from './ActionButtons'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActionButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActionButtons />)
    }).not.toThrow()
  })
})
