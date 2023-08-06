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

import Recently from './Recently'

const meta: Meta<typeof Recently> = {
  component: Recently,
}

export default meta

type Story = StoryObj<typeof Recently>

export const Primary: Story = {}
