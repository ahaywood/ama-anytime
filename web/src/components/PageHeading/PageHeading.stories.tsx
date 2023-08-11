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

import PageHeading from './PageHeading'

const meta: Meta<typeof PageHeading> = {
  component: PageHeading,
}

export default meta

type Story = StoryObj<typeof PageHeading>

export const Primary: Story = {}
