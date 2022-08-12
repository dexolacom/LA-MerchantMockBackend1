// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const loginHandler = async query => {
  // cl.o(' -- loginHandler', query);

  const user_ = await userService.getUserByLoginAndPassword(query);

  if (user_.length === 0) {
    cl.o(' -- no such a user in the db');
    return user_;
  } else {
    cl.o(' -- Login:');
    return user_[0];
  }
};

export default loginHandler;
