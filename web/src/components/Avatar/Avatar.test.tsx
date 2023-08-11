import { render } from '@redwoodjs/testing/web'

import Avatar from './Avatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Avatar />)
    }).not.toThrow()
  })

  it.skip('shows the initials', () => {})
  it.skip('shows an image', () => {})
  it.skip('displays a small size', () => {})
  it.skip('displays a medium size by default', () => {})
  it.skip('displays a large size', () => {})
})
