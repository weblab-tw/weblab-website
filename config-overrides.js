const { removeModuleScopePlugin, override, babelInclude, fixBabelImports, addLessLoader } = require('customize-cra')
const path = require('path')
const defaultThemeVars = require('lodestar-app/src/theme.json')

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([path.resolve('src'), path.resolve('node_modules/lodestar-app/src')]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        ...defaultThemeVars,
        '@btn-danger-bg': '@primary-color',
        '@btn-danger-border': '@primary-color',
        '@btn-danger-color': '#fff',
        '@btn-primary-bg': '@primary-color',
        '@btn-primary-color': '#fff',
        '@error-color': '#ff7d62',
        '@heading-1-size': '40px',
        '@heading-2-size': '32px',
        '@heading-3-size': '24px',
        '@heading-4-size': '20px',
        '@heading-5-size': '18px',
        '@heading-color': '#585858',
        '@normal-color': '#585858',
        '@primary-color': '#fd9998',
        '@processing-color': 'rgba(255, 87, 96, 0.1)',
        '@text-color': '#4a4a4a',
        '@text-color-secondary': '#cdcdcd',
        '@warning-color': '@primary-color',
      },
    },
  }),
)
