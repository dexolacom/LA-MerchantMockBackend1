// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserMailHandler = async data => {
  // console.log(' -- updateUserMailHandler');

  const result = await userService.updateUserMail(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return `${data.user_id} information updated`;
};

export default updateUserMailHandler;
