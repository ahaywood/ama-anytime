import type { Meta, StoryObj } from '@storybook/react'

import InvitesPage from './InvitesPage'

const meta: Meta<typeof InvitesPage> = {
  component: InvitesPage,
}

export default meta

type Story = StoryObj<typeof InvitesPage>

export const Primary: Story = {}
