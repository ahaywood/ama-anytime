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

import ProfileTabs from './ProfileTabs'

const meta: Meta<typeof ProfileTabs> = {
  component: ProfileTabs,
}

export default meta

type Story = StoryObj<typeof ProfileTabs>

export const Primary: Story = {}
