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

import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  component: Logo,
}

export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {}
export const onDark: Story = {
  args: {
    style: 'onDark',
  },
}
export const onPink: Story = {
  args: {
    style: 'onPink',
  },
}
