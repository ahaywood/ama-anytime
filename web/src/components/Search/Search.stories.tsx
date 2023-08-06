// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Search from './Search'

const meta: Meta<typeof Search> = {
  component: Search,
}

export default meta

type Story = StoryObj<typeof Search>

export const Primary: Story = {}
