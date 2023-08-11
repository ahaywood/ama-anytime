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

import ActionButtons from './ActionButtons'

const meta: Meta<typeof ActionButtons> = {
  component: ActionButtons,
}

export default meta

type Story = StoryObj<typeof ActionButtons>

export const Primary: Story = {}
