import { Preview } from '@storybook/react-vite'

import '../src/styles/main.css'

import { withDarkMode } from './with-dark-mode.decorator'

/**
 * @see https://storybook.js.org/docs/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation
 */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Select light or dark theme',
    defaultValue: 'Both',
    toolbar: {
      icon: 'mirror',
      items: ['Both', 'Light', 'Dark'],
      dynamicTitle: true,
    },
  },
}

/**
 * @see https://storybook.js.org/docs/essentials/controls#parameters
 * @see https://storybook.js.org/docs/writing-stories/decorators#global-decorators
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withDarkMode],
}

export default preview
