// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserNFTHandler = async data => {
  // cl.o(' -- updateUserNFTHandler');

  const result = await userService.updateUserNFT(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return data;
};

export default updateUserNFTHandler;
