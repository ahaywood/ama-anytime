import type { Meta, StoryObj } from '@storybook/react'

import TagPage from './TagPage'

const meta: Meta<typeof TagPage> = {
  component: TagPage,
}

export default meta

type Story = StoryObj<typeof TagPage>

export const Primary: Story = {}
