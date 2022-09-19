// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const activationHandler = async data => {
  // cl.o(' -- activationHandler');

  const result = await userService.activation(data);

  if (Array.isArray(result) && result[0] === 1) {
    const _user = await userService.getUserById(data.user_id);
    if (_user[0].NFT_id !== null) {
      cl.mt(' - activation success:', true);
      return _user;
    } else return `activation (1) failed: ${result}`;
  } else return `activation (2) failed: ${result}`;
};

export default activationHandler;
