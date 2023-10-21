import type { Meta, StoryObj } from '@storybook/react'

import QuestionPage from './QuestionPage'

const meta: Meta<typeof QuestionPage> = {
  component: QuestionPage,
}

export default meta

type Story = StoryObj<typeof QuestionPage>

export const Primary: Story = {}
