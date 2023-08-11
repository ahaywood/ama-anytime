import { render } from '@redwoodjs/testing/web'

import StackedAvatar from './StackedAvatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StackedAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StackedAvatar />)
    }).not.toThrow()
  })
})
