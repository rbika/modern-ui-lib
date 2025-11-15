import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component: `A modal dialog that interrupts the user with important content and expects a response.  
See the <a href="https://www.radix-ui.com/primitives/docs/components/alert-dialog" target="_blank">Radix UI primitive component</a> for more details.`,
      },
    },
  },
  argTypes: {
    open: {
      control: false,
      description: 'Whether the dialog is open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onOpenChange: {
      control: false,
      description:
        'Callback function called when the open state of the dialog changes.',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },

    // Workaround for Storybook's lack of support for subcomponents in argTypes.

    'AlertDialogTrigger.asChild': {
      name: 'AlertDialogTrigger → asChild',
      control: false,
      description: 'Whether to render the dialog as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
    'AlertDialogPortal.container': {
      name: 'AlertDialogPortal → container',
      control: false,
      description: 'Specify a container element to portal the content into.',
      table: {
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: 'document.body' },
        category: 'subcomponents',
      },
    },
    'AlertDialogOverlay.asChild': {
      name: 'AlertDialogOverlay → asChild',
      control: false,
      description: 'Whether to render the overlay as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
    'AlertDialogContent.asChild': {
      name: 'AlertDialogContent → asChild',
      control: false,
      description: 'Whether to render the overlay as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
    'AlertDialogCancel.asChild': {
      name: 'AlertDialogCancel → asChild',
      control: false,
      description: 'Whether to render the overlay as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
    'AlertDialogAction.asChild': {
      name: 'AlertDialogAction → asChild',
      control: false,
      description: 'Whether to render the overlay as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
    'AlertDialogTitle.asChild': {
      name: 'AlertDialogTitle → asChild',
      control: false,
      description: 'Whether to render the overlay as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
    'AlertDialogDescription.asChild': {
      name: 'AlertDialogDescription → asChild',
      control: false,
      description: 'Whether to render the overlay as its immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'subcomponents',
      },
    },
  } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

// AlertDialog stories
// -------------------

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
