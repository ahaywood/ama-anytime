import type { Meta, StoryObj } from '@storybook/react'

import NotificationSettingsPage from './NotificationSettingsPage'

const meta: Meta<typeof NotificationSettingsPage> = {
  component: NotificationSettingsPage,
}

export default meta

type Story = StoryObj<typeof NotificationSettingsPage>

export const Primary: Story = {}
