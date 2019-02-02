export const imports = {
  'src/create-app-touka.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-create-app-touka" */ 'src/create-app-touka.mdx'),
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/application/gestion-react.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-application-gestion-react" */ 'src/application/gestion-react.mdx'),
  'src/modules/modules.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-modules-modules" */ 'src/modules/modules.mdx'),
}
