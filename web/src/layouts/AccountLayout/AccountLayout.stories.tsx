import type { Meta, StoryObj } from '@storybook/react'

import AccountLayout from './AccountLayout'

const meta: Meta<typeof AccountLayout> = {
  component: AccountLayout,
}

export default meta

type Story = StoryObj<typeof AccountLayout>

export const Primary: Story = {}
