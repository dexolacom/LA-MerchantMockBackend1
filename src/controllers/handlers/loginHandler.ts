// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const loginHandler = async data => {
  console.log(' -- loginHandler');

  const user_ = await userService.getUserByLoginAndPassword(data);

  if (user_.length === 0) {
    cl.o(' -- no such a user in the db');
    return false;
  } else {
    cl.o(' -- Login:', true, `${user_[0].userAddress.slice(0, 7)}...`);
    return true;
  }
};

export default loginHandler;
