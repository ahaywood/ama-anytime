import type { Meta, StoryObj } from '@storybook/react'

import WaitingListPage from './WaitingListPage'

const meta: Meta<typeof WaitingListPage> = {
  component: WaitingListPage,
}

export default meta

type Story = StoryObj<typeof WaitingListPage>

export const Primary: Story = {}
