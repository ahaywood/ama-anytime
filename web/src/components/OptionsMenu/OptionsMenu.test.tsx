import { render } from '@redwoodjs/testing/web'

import OptionsMenu from './OptionsMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OptionsMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OptionsMenu />)
    }).not.toThrow()
  })
})
