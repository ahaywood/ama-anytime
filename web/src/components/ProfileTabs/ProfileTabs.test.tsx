import { render } from '@redwoodjs/testing/web'

import ProfileTabs from './ProfileTabs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileTabs />)
    }).not.toThrow()
  })
})
