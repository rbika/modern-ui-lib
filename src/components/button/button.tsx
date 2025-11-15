import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  cn(
    'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium transition outline-none',
    'focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-[3px] focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0',
  ),
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground disabled:hover:bg-primary hover:bg-primary-accent',
        secondary:
          'bg-secondary text-secondary-foreground disabled:hover:bg-secondary hover:bg-secondary-accent',
        outline:
          'text-foreground hover:bg-card-accent bg-card disabled:hover:border-border disabled:hover:bg-card border',
        destructive:
          'dark:bg-destructive bg-destructive text-destructive-foreground disabled:hover:bg-destructive dark:disabled:hover:bg-destructive hover:bg-destructive-accent dark:hover:bg-destructive-accent',
      },
      size: {
        sm: 'h-8 px-[14px] [&_svg:not([class*="size-"])]:size-4',
        md: 'h-9 px-4 [&_svg:not([class*="size-"])]:size-4',
        lg: 'h-10 px-6 [&_svg:not([class*="size-"])]:size-5',
        'icon-sm': 'size-8 [&_svg:not([class*="size-"])]:size-4',
        'icon-md': 'size-9 [&_svg:not([class*="size-"])]:size-4',
        'icon-lg': 'size-10 [&_svg:not([class*="size-"])]:size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = ({ variant, size, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      data-slot="button"
      className={buttonVariants({ variant, size })}
      {...props}
    />
  )
}

export { Button }
