// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const createUserHandler = async data => {
  console.log(' -- loginHandler');
  
  const _user = await userService.getUserByUserIdAndUserAddress(data);

  if (_user.length !== 0) return 'such a user already exists';

  const user_ = await userService.createUser(data);

  return user_;
};

export default createUserHandler;
