// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserMailHandler = async data => {
  // cl.o(' -- updateUserMailHandler');

  const result = await userService.updateUserMail(data);

  if (result[0] === 0) return 'Bad Request';

  return {
    user_id: data.user_id,
    is_waitlist: data.is_waitlist,
    msg: 'information updated',
  };
};

export default updateUserMailHandler;
