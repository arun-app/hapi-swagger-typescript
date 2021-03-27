import logger from "../helper/logger";
import * as mongoose from "mongoose"
import Config from "../config";

let db;
try {
    mongoose.connect(Config.mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', () => {
        logger.info(`app is connected to ${Config.mongoDbUri}`);
    });
    mongoose.connection.on('error', (err: Error) => {
        logger.info('error while connecting to mongodb', err);
    });
    db = mongoose.connection;
} catch (e) {
    logger.error(e);
}
export default db ;