import type { Meta, StoryObj } from '@storybook/react'

import ListsPage from './ListsPage'

const meta: Meta<typeof ListsPage> = {
  component: ListsPage,
}

export default meta

type Story = StoryObj<typeof ListsPage>

export const Primary: Story = {}
