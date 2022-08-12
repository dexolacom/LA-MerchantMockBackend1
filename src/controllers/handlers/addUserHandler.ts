// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const addUserHandler = async data => {
  // cl.o(' -- loginHandler', data);

  const login = await userService.getUserByLoginAndPassword(data);

  const user_ =
    login.length > 0
      ? 'these registration data are not unique'
      : await userService.addUser(data);

  return user_;
};

export default addUserHandler;
