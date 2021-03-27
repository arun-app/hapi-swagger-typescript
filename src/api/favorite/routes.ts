import * as Hapi from '@hapi/hapi';
import UserController from '../../api/favorite/controller';
import validate from '../../api/favorite/validate';
import Logger from '../../helper/logger';
import IRoute from '../../helper/route';

export default class UserRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise<void>(resolve => {
      Logger.info('UserRoutes - Start adding user routes');

      // Passing ID by constructor it's not neccesary as default value it's 'id'
      const controller = new UserController('USER_ID');

      server.route([
        {
          method: 'POST',
          path: '/api/favorite',
          options: {
            handler: controller.create,
            validate: validate.create,
            description: 'Method that creates a new user.',
            tags: ['api', 'favorite'],
            auth: false,
          },
        },
        {
          method: 'PUT',
          path: `/api/favorite/{${controller.id}}`,
          options: {
            handler: controller.updateById,
            validate: validate.updateById,
            description: 'Method that updates a user by its id.',
            tags: ['api', 'favorite'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: `/api/favorite/{${controller.id}}`,
          options: {
            handler: controller.getById,
            validate: validate.getById,
            description: 'Method that get a user by its id.',
            tags: ['api', 'favorite'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: '/api/favorite',
          options: {
            handler: controller.getAll,
            description: 'Method that gets all favorite.',
            tags: ['api', 'favorite'],
            auth: false,
          },
        },
        {
          method: 'DELETE',
          path: `/api/favorite/{${controller.id}}`,
          options: {
            handler: controller.deleteById,
            validate: validate.deleteById,
            description: 'Method that deletes a user by its id.',
            tags: ['api', 'favorite'],
            auth: false,
          },
        },
        
      ]);

      Logger.info('UserRoutes - Finish adding user routes');

      resolve();
    });
  }
}
