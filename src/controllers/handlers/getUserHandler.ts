// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const getUserHandler = async data => {
  // cl.o(' -- getUserHandler:');

  const { query } = data;

  const dataKeys = Object.keys(query);

  let users = null;

  if (dataKeys.length === 0) {
    users = await userService.getAllUsers();
    cl.o(' -- all users:', users.length);
  }

  if (dataKeys.length === 1 && dataKeys[0] === 'user_id') {
    users = await userService.getUserById(Number(query.user_id));
    if (users.length === 0) return false;
    cl.o(` -- user id: ${users[0].user_id}`, true);
  }

  return users;
};

export default getUserHandler;
