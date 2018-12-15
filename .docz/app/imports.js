export const imports = {
  'create-app-touka.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "create-app-touka" */ 'create-app-touka.mdx'),
  'gestion-react.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "gestion-react" */ 'gestion-react.mdx'),
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
}
