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

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    name: 'Amy Dutton',
  },
}

export const WithImage: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
  },
}

export const WithImageSmall: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    size: 'small',
  },
}

export const WithImageLarge: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    size: 'large',
  },
}

export const InitialsSmallAvatar: Story = {
  args: {
    name: 'Amy Dutton',
    size: 'small',
  },
}

export const InitialsLargeAvatar: Story = {
  args: {
    name: 'Amy Dutton',
    size: 'large',
  },
}
