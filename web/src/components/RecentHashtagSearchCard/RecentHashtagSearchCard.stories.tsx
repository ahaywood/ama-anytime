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

import RecentHashtagSearchCard from './RecentHashtagSearchCard'

const meta: Meta<typeof RecentHashtagSearchCard> = {
  component: RecentHashtagSearchCard,
}

export default meta

type Story = StoryObj<typeof RecentHashtagSearchCard>

export const Primary: Story = {
  args: {
    hashtag: 'javscript',
  },
}
