import * as Hapi from '@hapi/hapi';
import UserController from '../../api/users/controller';
import validate from '../../api/users/validate';
import Logger from '../../helper/logger';
import IRoute from '../../helper/route';

export default class UserRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise<void>(resolve => {
      Logger.info('UserRoutes - Start adding user routes');

      // Passing ID by constructor it's not necessary as default value it's 'id'
      const controller = new UserController('USER_ID');

      server.route([
        {
          method: 'POST',
          path: '/users',
          options: {
            handler: controller.create,
            validate: validate.create,
            description: 'Method that creates a new user.',
            tags: ['api', 'users'],
            auth: false,
          },
          // handler: (request, h) => {
          //   User.create(request.payload)
          //   return h.response(request.payload);
          // }
        },
        {
          method: 'PUT',
          path: `/users/{${controller.id}}`,
          options: {
            handler: controller.updateById,
            validate: validate.updateById,
            description: 'Method that updates a user by its id.',
            tags: ['api', 'users'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: `/users/{${controller.id}}`,
          options: {
            handler: controller.getById,
            validate: validate.getById,
            description: 'Method that get a user by its id.',
            tags: ['api', 'users'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: '/users',
          options: {
            handler: controller.getAll,
            description: 'Method that gets all users.',
            tags: ['api', 'users'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: '/',
          options: {
            handler: async function (request, h) {
              return h.response("hello arun")
            },
            description: 'Method that gets all users.',
            tags: ['api', 'users'],
            auth: false,
          },
        },
        {
          method: 'DELETE',
          path: `/users/{${controller.id}}`,
          options: {
            handler: controller.deleteById,
            validate: validate.deleteById,
            description: 'Method that deletes a user by its id.',
            tags: ['api', 'users'],
            auth: false,
          },
        },

      ]);

      Logger.info('UserRoutes - Finish adding user routes');

      resolve();
    });
  }
}
