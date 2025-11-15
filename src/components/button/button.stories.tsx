import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'

import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Displays a button or a component that looks like a button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon-sm', 'icon-md', 'icon-lg'],
      description: 'The size of the button',
      table: {
        type: {
          summary: 'sm | md | lg | icon-sm | icon-md | icon-lg',
        },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render the button as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content inside the button',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Button stories
// --------------

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
    disabled: false,
    asChild: false,
  },
}

export const Primary: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col items-start gap-2">
        <Button size="sm" children="Small" />
        <Button size="md" children="Medium" />
        <Button size="lg" children="Large" />
        <Button size="lg" disabled children="Disabled" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Button size="icon-sm" children={<MoveRightIcon />} />
        <Button size="icon-md" children={<MoveRightIcon />} />
        <Button size="icon-lg" children={<MoveRightIcon />} />
        <Button size="icon-lg" disabled children={<MoveRightIcon />} />
      </div>
    </div>
  ),
}

export const Secondary: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col items-start gap-2">
        <Button variant="secondary" size="sm" children="Small" />
        <Button variant="secondary" size="md" children="Medium" />
        <Button variant="secondary" size="lg" children="Large" />
        <Button variant="secondary" size="lg" disabled children="Disabled" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Button
          variant="secondary"
          size="icon-sm"
          children={<MoveRightIcon />}
        />
        <Button
          variant="secondary"
          size="icon-md"
          children={<MoveRightIcon />}
        />
        <Button
          variant="secondary"
          size="icon-lg"
          children={<MoveRightIcon />}
        />
        <Button
          variant="secondary"
          size="icon-lg"
          disabled
          children={<MoveRightIcon />}
        />
      </div>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col items-start gap-2">
        <Button variant="outline" size="sm" children="Small" />
        <Button variant="outline" size="md" children="Medium" />
        <Button variant="outline" size="lg" children="Large" />
        <Button variant="outline" size="lg" disabled children="Disabled" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Button variant="outline" size="icon-sm" children={<MoveRightIcon />} />
        <Button variant="outline" size="icon-md" children={<MoveRightIcon />} />
        <Button variant="outline" size="icon-lg" children={<MoveRightIcon />} />
        <Button
          variant="outline"
          size="icon-lg"
          disabled
          children={<MoveRightIcon />}
        />
      </div>
    </div>
  ),
}

export const Destructive: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col items-start gap-2">
        <Button variant="destructive" size="sm" children="Small" />
        <Button variant="destructive" size="md" children="Medium" />
        <Button variant="destructive" size="lg" children="Large" />
        <Button variant="destructive" size="lg" disabled children="Disabled" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Button
          variant="destructive"
          size="icon-sm"
          children={<MoveRightIcon />}
        />
        <Button
          variant="destructive"
          size="icon-md"
          children={<MoveRightIcon />}
        />
        <Button
          variant="destructive"
          size="icon-lg"
          children={<MoveRightIcon />}
        />
        <Button
          variant="destructive"
          size="icon-lg"
          disabled
          children={<MoveRightIcon />}
        />
      </div>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button>
        <MoveLeftIcon />
        Back
      </Button>
      <Button>
        Next
        <MoveRightIcon />
      </Button>
    </div>
  ),
}

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="/">Link</a>
    </Button>
  ),
}
