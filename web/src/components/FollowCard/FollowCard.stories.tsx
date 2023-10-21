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

import FollowCard from './FollowCard'

const meta: Meta<typeof FollowCard> = {
  component: FollowCard,
}

export default meta

type Story = StoryObj<typeof FollowCard>

export const Primary: Story = {
  args: {
    user: {
      name: 'Amy Dutton',
      avatar: 'https://picsum.photos/seed/1697830900784/300/300',
      username: 'amydutton',
      bio: 'I am a person who likes to do things.',
    },
  },
}

export const withShowMore: Story = {
  args: {
    showMore: true,
    ...Primary.args,
  },
}
