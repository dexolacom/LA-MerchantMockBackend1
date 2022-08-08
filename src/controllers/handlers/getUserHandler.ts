// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const getUserHandler = async data => {
  console.log(' -- getUserHandler:');

  let users = null;

  if (data === undefined) {
    users = await userService.getAllUsers();
    cl.o(' -- all users:', users.length);
  }

  return users;
};

export default getUserHandler;
