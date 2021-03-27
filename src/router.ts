import * as Hapi from '@hapi/hapi';
import UserRoutes from './api/users/routes';
import FavoriteRoute from './api/favorite/routes';
import Logger from './helper/logger';

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    Logger.info('Router - Start adding routes');

    await new UserRoutes().register(server);
    await new FavoriteRoute().register(server);

    Logger.info('Router - Finish adding routes');
  }
}
