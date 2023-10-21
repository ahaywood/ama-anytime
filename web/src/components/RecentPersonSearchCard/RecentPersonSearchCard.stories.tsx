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

import RecentPersonSearchCard from './RecentPersonSearchCard'

const meta: Meta<typeof RecentPersonSearchCard> = {
  component: RecentPersonSearchCard,
}

export default meta

type Story = StoryObj<typeof RecentPersonSearchCard>

export const Primary: Story = {
  args: {
    avatar: {
      image: 'https://picsum.photos/seed/1697853917843/300/300',
      name: 'Amy Dutton',
    },
    username: 'selfteachme',
  },
}
