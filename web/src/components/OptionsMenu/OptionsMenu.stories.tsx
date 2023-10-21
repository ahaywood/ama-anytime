// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import OptionsMenu from './OptionsMenu'

const meta: Meta<typeof OptionsMenu> = {
  component: OptionsMenu,
}

export default meta

type Story = StoryObj<typeof OptionsMenu>

export const Primary: Story = {
  args: {
    direction: 'topLeft',
    options: [
      {
        label: 'Block',
        icon: 'block',
        onClick: () => console.log('Block'),
      },
      {
        label: 'Copy Link to Profile',
        icon: 'link',
        onClick: () => console.log('Block'),
      },
    ],
  },
}

export const TopLeft: Story = {
  args: {
    ...Primary.args,
    direction: 'topLeft',
  },
}

export const TopRight: Story = {
  args: {
    ...Primary.args,
    direction: 'topRight',
  },
}

export const BottomLeft: Story = {
  args: {
    ...Primary.args,
    direction: 'bottomLeft',
  },
}

export const BottomRight: Story = {
  args: {
    ...Primary.args,
    direction: 'bottomRight',
  },
}
