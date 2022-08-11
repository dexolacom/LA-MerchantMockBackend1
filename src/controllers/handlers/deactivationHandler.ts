// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const deactivationHandler = async data => {
  // cl.o(' -- deactivationHandler');

  const result = await userService.deactivation(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return {
    user_id: data.user_id,
    is_activated_NFT: data.is_activated_NFT,
    NFT_id: null,
    expiration: data.expiration,
    NFT_status: data.NFT_status,
  };
};

export default deactivationHandler;
