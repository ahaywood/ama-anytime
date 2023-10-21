import { render } from '@redwoodjs/testing/web'

import BrandKitPage from './BrandKitPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrandKitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrandKitPage />)
    }).not.toThrow()
  })
})
