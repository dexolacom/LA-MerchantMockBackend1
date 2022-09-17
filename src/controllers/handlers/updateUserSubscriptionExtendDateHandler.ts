// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserSubscriptionExtendDateHandler = async data => {
  // cl.mt(' -- updateUserSubscriptionExtendDateHandler', data);

  const result = await userService.updateUserSubscriptionExtendDate(data);

  if (Array.isArray(result) && result[0] === 1) {
    const _user = await userService.getUserById(data.user_id);
    if (_user[0].expiration === data.expiration) {
      cl.mt(' - date extension success:', true);
      return _user;
    } else return `date extension (1) failed: ${result}`;
  } else return `date extension (2) failed: ${result}`;

  // const _user = await userService.getUserById(data.user_id);

  // _user?.length > 0
  //   ? cl.mt(' - updated user:', _user?.length)
  //   : cl.mt(' - WARNING: updated user:', _user?.length);

  // return _user?.length > 0 ? _user[0] : _user;
};

export default updateUserSubscriptionExtendDateHandler;
