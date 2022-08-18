// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const getUserHandler = async data => {
  // cl.o(' -- getUserHandler:', data.query);

  const { query } = data;

  const dataKeys = Object.keys(query);

  let users = null;

  if (
    dataKeys.length === 1 &&
    dataKeys[0] === 'user_id' &&
    query.user_id?.length > 0
  ) {
    if (isNaN(Number(query.user_id))) {
      cl.o(' -- Bad Request: isNaN chacking');
      return 'Bad Request: Not a Number!';
    }

    const _user = await userService.getUserById(Number(query.user_id));

    if (_user?.length === 0) {
      cl.o(` -- there is no user with id: ${query.user_id}`);
      return false;
    }

    users = _user;

    cl.o(` -- user id: ${_user[0].user_id}`, true);
  } else {
    cl.o(' -- Bad Request ');

    return 'Bad Request';
  }

  return users;
};

export default getUserHandler;
