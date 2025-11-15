import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/utils/cn'

const Switch = (props: SwitchPrimitive.SwitchProps) => (
  <SwitchPrimitive.Root
    data-slot="switch"
    className={cn(
      'data-[state=checked]:bg-primary focus-visible:ring-ring bg-switch-unchecked dark:focus-visible:ring-offset-background relative h-6 w-10 cursor-pointer rounded-full transition outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30',
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        'bg-primary-foreground block size-5 translate-x-0.5 rounded-full transition-transform data-[state=checked]:translate-x-[calc(100%-2px)]',
      )}
    />
  </SwitchPrimitive.Root>
)

export { Switch }
