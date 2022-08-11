// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserSubscriptionHandler = async data => {
  // cl.mt(' -- updateUserSubscription');

  const result = await userService.updateUserSubscription(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return { data: `${data.user_id} information updated` };
};

export default updateUserSubscriptionHandler;
