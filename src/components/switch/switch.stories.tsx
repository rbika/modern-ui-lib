import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button/button'
import { Switch } from './switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `A control that allows the user to toggle between checked and not checked.  
See the <a href="https://www.radix-ui.com/primitives/docs/components/switch" target="_blank">Radix UI primitive component</a> for more details.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultChecked: {
      control: false,
      description:
        'The state of the switch when it is initially rendered. Use when you do not need to control its state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: 'boolean',
      description:
        'The controlled state of the switch. Must be used in conjunction with `onCheckedChange`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      control: false,
      description: 'Event handler called when the state of the switch changes.',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// Switch stories
// --------------

export const Default: Story = {
  args: {
    disabled: false,
    defaultChecked: false,
    checked: false,
    onCheckedChange: () => undefined,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-start gap-2">
        <div className="flex w-28 flex-col items-start gap-2">
          <Button size="sm" onClick={() => setChecked(!checked)}>
            Toggle
          </Button>
          <p className="text-sm">Checked: {checked ? 'Yes' : 'No'}</p>
        </div>
        <Switch checked={checked} onCheckedChange={setChecked} />
      </div>
    )
  },
}
