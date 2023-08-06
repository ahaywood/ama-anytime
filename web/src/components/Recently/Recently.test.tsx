import { render } from '@redwoodjs/testing/web'

import Recently from './Recently'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Recently', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Recently />)
    }).not.toThrow()
  })
})
