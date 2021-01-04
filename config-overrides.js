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
      modifyVars: { ...defaultThemeVars, '@primary-color': '#b52' },
    },
  }),
)
