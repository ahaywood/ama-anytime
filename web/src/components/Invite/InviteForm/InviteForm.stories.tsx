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

import InviteForm from './InviteForm'

const meta: Meta<typeof InviteForm> = {
  component: InviteForm,
}

export default meta

type Story = StoryObj<typeof InviteForm>

export const Primary: Story = {}
