// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const activationHandler = async data => {
  // cl.o(' -- activationHandler');

  const result = await userService.activation(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return { data: `${data.user_id} information updated` };
};

export default activationHandler;
