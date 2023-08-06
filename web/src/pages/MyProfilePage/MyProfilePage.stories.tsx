import type { Meta, StoryObj } from '@storybook/react'

import MyProfilePage from './MyProfilePage'

const meta: Meta<typeof MyProfilePage> = {
  component: MyProfilePage,
}

export default meta

type Story = StoryObj<typeof MyProfilePage>

export const Primary: Story = {}
