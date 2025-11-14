import type { StorybookConfig } from '@storybook/react-vite'

/**
 * @see https://storybook.js.org/docs/configure
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}
export default config
