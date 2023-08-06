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

import YouMightLike from './YouMightLike'

const meta: Meta<typeof YouMightLike> = {
  component: YouMightLike,
}

export default meta

type Story = StoryObj<typeof YouMightLike>

export const Primary: Story = {}
