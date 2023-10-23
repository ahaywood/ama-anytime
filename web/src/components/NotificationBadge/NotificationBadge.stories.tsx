// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import NotificationBadge from './NotificationBadge'

const meta: Meta<typeof NotificationBadge> = {
  component: NotificationBadge,
}

export default meta

type Story = StoryObj<typeof NotificationBadge>

export const Primary: Story = {}
