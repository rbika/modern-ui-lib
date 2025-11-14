import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { cn } from '@/utils/cn'
import { Button } from '../button'

const AlertDialog = (props: AlertDialogPrimitive.AlertDialogProps) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

const AlertDialogTrigger = (
  props: AlertDialogPrimitive.AlertDialogTriggerProps,
) => {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

const AlertDialogPortal = (
  props: AlertDialogPrimitive.AlertDialogPortalProps,
) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

const AlertDialogOverlay = ({
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogOverlayProps) => {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-50 bg-black/70',
        className,
      )}
      {...props}
    />
  )
}

const AlertDialogContent = ({
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogContentProps) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          'data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out bg-background fixed top-[50%] left-[50%] z-50 flex w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-lg p-6 shadow-lg sm:max-w-lg dark:border',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

const AlertDialogFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

const AlertDialogTitle = ({
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogTitleProps) => {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

const AlertDialogDescription = ({
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogDescriptionProps) => {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('text-sm', className)}
      {...props}
    />
  )
}

const AlertDialogCancel = (
  props: AlertDialogPrimitive.AlertDialogCancelProps,
) => {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
      asChild
      {...props}
    >
      <Button variant="outline" {...props} />
    </AlertDialogPrimitive.Cancel>
  )
}

const AlertDialogAction = (
  props: AlertDialogPrimitive.AlertDialogActionProps,
) => {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      asChild
      {...props}
    >
      <Button variant="primary" {...props} />
    </AlertDialogPrimitive.Action>
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
