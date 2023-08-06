import { render } from '@redwoodjs/testing/web'

import MyProfilePage from './MyProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyProfilePage />)
    }).not.toThrow()
  })
})
