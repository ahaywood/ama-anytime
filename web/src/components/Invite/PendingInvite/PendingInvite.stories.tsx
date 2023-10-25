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

import PendingInvite from './PendingInvite'

const meta: Meta<typeof PendingInvite> = {
  component: PendingInvite,
}

export default meta

type Story = StoryObj<typeof PendingInvite>

export const Primary: Story = {
  args: {
    invite: {
      email: 'amy@redwoodjs.com',
    },
  },
}
