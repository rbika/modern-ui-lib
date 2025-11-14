import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge and conditionally apply CSS class names.
 * Combines clsx for conditional class handling with twMerge to intelligently merge Tailwind CSS
 * classes.
 *
 * @param inputs - Variable number of class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class name string
 *
 * @example
 * ```ts
 * cn('foo', 'bar') // 'foo bar'
 * cn('px-2 py-1', 'px-4') // 'py-1 px-4' (px-2 is overridden by px-4)
 * cn({ 'bg-red': true, 'bg-blue': false }) // 'bg-red'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
