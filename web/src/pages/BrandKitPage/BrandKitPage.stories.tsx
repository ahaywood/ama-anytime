import type { Meta, StoryObj } from '@storybook/react'

import BrandKitPage from './BrandKitPage'

const meta: Meta<typeof BrandKitPage> = {
  component: BrandKitPage,
}

export default meta

type Story = StoryObj<typeof BrandKitPage>

export const Primary: Story = {}
