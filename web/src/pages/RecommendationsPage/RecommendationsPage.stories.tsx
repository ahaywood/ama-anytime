import type { Meta, StoryObj } from '@storybook/react'

import RecommendationsPage from './RecommendationsPage'

const meta: Meta<typeof RecommendationsPage> = {
  component: RecommendationsPage,
}

export default meta

type Story = StoryObj<typeof RecommendationsPage>

export const Primary: Story = {}
