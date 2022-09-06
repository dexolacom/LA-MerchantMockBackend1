// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserSubscriptionExtendDateHandler = async data => {
  // cl.mt(' -- updateUserSubscriptionExtendDateHandler', data);

  const result = await userService.updateUserSubscriptionExtendDate(data);

  if (result[0] === 0) return 'ERROR (mock): manual date extension failed';

  const _user = await userService.getUserById(data.user_id);

  _user?.length > 0
    ? cl.mt(' - updated user:', _user?.length)
    : cl.mt(' - WARNING: updated user:', _user?.length);

  return _user?.length > 0 ? _user[0] : _user;
};

export default updateUserSubscriptionExtendDateHandler;
