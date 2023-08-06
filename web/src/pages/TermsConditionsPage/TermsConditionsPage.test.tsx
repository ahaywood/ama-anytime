import { render } from '@redwoodjs/testing/web'

import TermsConditionsPage from './TermsConditionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TermsConditionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TermsConditionsPage />)
    }).not.toThrow()
  })
})
