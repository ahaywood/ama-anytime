import type { Meta, StoryObj } from '@storybook/react'

import InviteOnlyPage from './InviteOnlyPage'

const meta: Meta<typeof InviteOnlyPage> = {
  component: InviteOnlyPage,
}

export default meta

type Story = StoryObj<typeof InviteOnlyPage>

export const Primary: Story = {}
