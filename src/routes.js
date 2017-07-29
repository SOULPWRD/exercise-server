const routes = [
  {
    method: 'GET',
    path: '/{path*}',
    config: {
      description: 'Index endpoint',
      handler: {
        file: 'index.html'
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/{p*}',
    config: {
      description: 'Assets endpoint',
      handler: {
        directory: {
          path: 'assets',
          redirectToSlash: true,
          index: true
        }
      }
    }
  }
];

module.exports = routes;
