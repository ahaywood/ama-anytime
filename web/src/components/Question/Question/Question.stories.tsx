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

import Question from './Question'

const meta: Meta<typeof Question> = {
  component: Question,
}

export default meta

type Story = StoryObj<typeof Question>

const question = {
  id: 1,
  question: 'What is your favorite color?',
  createdAt: '2021-07-01T00:00:00Z',
  updatedAt: '2021-07-01T00:00:00Z',
  archive: false,
  answer: 'Blue',
  authorId: 1,
  directedAtId: 2,
}

export const Primary: Story = {
  args: {
    question,
  },
}
