export default {
  mongoDbUri : 'mongodb://localhost/pingya-hapi',
  swagger: {
    options: {
      info: {
        title: 'API Documentation',
        version: 'v1.0.0',
        contact: {
          name: 'Arun',
          email: 'arun.s.applogiq@gmail.com',
        },
      },
      grouping: 'tags',
      sortEndpoints: 'ordered',
    },
  },
  status: {
    options: {
      path: '/status',
      title: 'API Monitor',
      routeConfig: {
        auth: false,
      },
    },
  },
};
