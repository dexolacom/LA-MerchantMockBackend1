// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const deactivationHandler = async data => {
  // cl.o(' -- deactivationHandler');

  const result = await userService.deactivation(data);

  if (typeof result === 'string') return `ERROR: ${result}`;
  if (result[0] === 0) return 'deactivation failed';

  return {
    user_id: data.user_id,
    is_activated_NFT: data.is_activated_NFT,
    NFT_id: data.NFT_id,
    expiration: data.expiration,
    NFT_status: data.NFT_status,
  };
};

export default deactivationHandler;
