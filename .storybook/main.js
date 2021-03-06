module.exports = {
  stories: ['../src/**/stories.mdx', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config;
  }
};
