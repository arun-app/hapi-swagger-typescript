import Logger from './helper/logger';
import Server from './server';
// const mongoose = require('mongoose');

// const mongoDbUri = 'mongodb://localhost:27017/pingya-hapi';

(async () => {
  await Server.start();
})();

// mongoose.connect(mongoDbUri,{ useNewUrlParser: true,useUnifiedTopology: true } );
// mongoose.connection.on('connected', () => {
//     console.log(`app is connected to ${mongoDbUri}`);
// });
// mongoose.connection.on('error', (err:Error) => {
//     console.log('error while connecting to mongodb', err);
// });


// listen on SIGINT signal and gracefully stop the server
process.on('SIGINT', () => {
  Logger.info('Stopping hapi server');

  Server.stop().then(err => {
    Logger.info(`Server stopped`);
    process.exit(err ? 1 : 0);
  });
});
