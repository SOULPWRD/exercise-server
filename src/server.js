const Hapi = require('hapi');
const Blipp = require('blipp');
const Inert = require('inert');
const Hoek = require('hoek');

const { resolve } = require('path');

//routes
const routes = require('./routes');

// create a new Hapi instance server
const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: resolve(__dirname, '../dist')
      }
    }
  }
});

//setup connections
server.connection({
  host: '127.0.0.1',
  port: process.env.PORT || 8000
});

// register plugins
// add routes
// and start server
server.register([
  Inert,
  Blipp,
], (err) => {

  if (err) {
    Hoek.assert(err);
  }

  server.route(routes);

  server.start((err) => {

    if (err) {
      Hoek.assert(err);
    }

  });
});

