// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserSubscriptionHandler = async data => {
  // cl.mt(' -- updateUserSubscription', data);

  const result = await userService.updateUserSubscription(data);

  if (Array.isArray(result) && result[0] === 1) {
    const _user = await userService.getUserById(data.user_id);
    if (_user[0].NFT_id === data.NFT_id) {
      cl.mt(' - user subscribed:', true);
      return _user;
    } else return `user is not subscribed: ${result}`;
  } else return `subscription was not successful: ${result}`;
};

export default updateUserSubscriptionHandler;
