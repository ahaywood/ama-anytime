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

import ProfileHeading from './ProfileHeading'

const meta: Meta<typeof ProfileHeading> = {
  component: ProfileHeading,
}

export default meta

type Story = StoryObj<typeof ProfileHeading>

export const Primary: Story = {
  args: {
    user: {
      cover: 'https://source.unsplash.com/random/1600x400',
      avatar: 'https://source.unsplash.com/random/300x300',
      name: 'Jane Doe',
      username: 'janedoe',
      website: 'https://janedoe.com',
    },
  },
}
