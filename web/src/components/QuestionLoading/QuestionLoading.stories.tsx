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

import QuestionLoading from './QuestionLoading'

const meta: Meta<typeof QuestionLoading> = {
  component: QuestionLoading,
}

export default meta

type Story = StoryObj<typeof QuestionLoading>

export const Primary: Story = {}
