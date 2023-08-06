import { render } from '@redwoodjs/testing/web'

import PrivacySafetyPage from './PrivacySafetyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacySafetyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacySafetyPage />)
    }).not.toThrow()
  })
})
