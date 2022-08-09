// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const addUserHandler = async data => {
  // cl.o(' -- loginHandler');

  const user_ = await userService.addUser(data);

  return user_;
};

export default addUserHandler;
