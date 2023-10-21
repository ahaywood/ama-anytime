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

import {
  Primary as AvatarPrimary,
  WithImage as AvatarWithImage,
} from '../Avatar/Avatar.stories'

import StackedAvatar from './StackedAvatar'

const meta: Meta<typeof StackedAvatar> = {
  component: StackedAvatar,
}

export default meta

type Story = StoryObj<typeof StackedAvatar>

export const Primary: Story = {
  args: {
    avatars: [{ ...AvatarPrimary.args }, { ...AvatarWithImage.args }],
  },
}
