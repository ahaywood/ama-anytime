import { render } from '@redwoodjs/testing/web'

import PageHeading from './PageHeading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageHeading />)
    }).not.toThrow()
  })
})
