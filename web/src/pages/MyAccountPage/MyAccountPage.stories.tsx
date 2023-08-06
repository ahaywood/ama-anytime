import type { Meta, StoryObj } from '@storybook/react'

import MyAccountPage from './MyAccountPage'

const meta: Meta<typeof MyAccountPage> = {
  component: MyAccountPage,
}

export default meta

type Story = StoryObj<typeof MyAccountPage>

export const Primary: Story = {}
