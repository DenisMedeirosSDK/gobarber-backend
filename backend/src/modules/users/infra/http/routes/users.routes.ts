import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersController from '../Controllers/UsersController';
import UserAvatarController from '../Controllers/UserAvatarController';

import ensureAuthneticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthneticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
