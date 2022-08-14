// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const addUserHandler = async data => {
  cl.o(' -- loginHandler', data);

  if (data.login.length === 0 || data.password.length === 0)
    return 'login and password fields cannot be empty';

  const login = await userService.getUserByLoginAndPassword(data);

  const user_ =
    login.length > 0
      ? 'these registration data are not unique'
      : await userService.addUser(data);

  return user_;
};

export default addUserHandler;
