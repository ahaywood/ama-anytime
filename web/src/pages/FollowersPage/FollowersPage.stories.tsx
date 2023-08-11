import type { Meta, StoryObj } from '@storybook/react'

import FollowersPage from './FollowersPage'

const meta: Meta<typeof FollowersPage> = {
  component: FollowersPage,
}

export default meta

type Story = StoryObj<typeof FollowersPage>

export const Primary: Story = {}
