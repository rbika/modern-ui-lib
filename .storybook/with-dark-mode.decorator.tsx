import React from 'react'

import { Decorator } from '@storybook/react-vite'

/**
 * Storybook decorator that applies dark mode styling based on the global theme setting.
 *
 * - If theme is 'Light': Renders the story with light mode styling and padding
 * - If theme is 'Dark': Renders the story with dark mode classes and background
 * - If theme is unset or 'Auto': Renders both light and dark versions side by side for comparison
 *
 * @param Story - The story component to render
 * @param context - Storybook context containing globals (theme)
 * @returns React element wrapping the story with appropriate dark mode styling
 */
const withDarkMode: Decorator = (Story, context) => {
  const { theme } = context.globals

  if (theme === 'Light') {
    return (
      <div className="px-8 py-12">
        <Story />
      </div>
    )
  }

  if (theme === 'Dark') {
    return (
      <div className="dark bg-background px-8 py-12">
        <Story />
      </div>
    )
  }

  return (
    <div>
      <div className="border-border border border-b-0 px-8 py-12">
        <Story />
      </div>
      <div className="border-background dark bg-background border px-8 py-12">
        <Story />
      </div>
    </div>
  )
}

export { withDarkMode }
