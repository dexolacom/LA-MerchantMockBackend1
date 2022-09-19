// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const deactivationHandler = async data => {
  // cl.o(' -- deactivationHandler');

  const result = await userService.deactivation(data);

  if (Array.isArray(result) && result[0] === 1) {
    const _user = await userService.getUserById(data.user_id);
    if (_user[0].NFT_id === null) {
      cl.mt(' - deactivation success:', true);
      return _user;
    } else return `deactivation (1) failed: ${result}`;
  } else return `deactivation (2) failed: ${result}`;
};

export default deactivationHandler;
