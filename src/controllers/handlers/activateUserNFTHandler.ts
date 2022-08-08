// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const activateUserNFTHandler = async data => {
  console.log(' -- createUserHandler');

  const result = await userService.updateUserNFTIsActivated(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return { isActivated: data.isActivated };
};

export default activateUserNFTHandler;
