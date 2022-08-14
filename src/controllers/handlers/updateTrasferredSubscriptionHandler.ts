// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateTrasferredSubscriptionHandler = async data => {
  cl.o(' -- updateTrasferredSubscriptionHandler', data);

  const result = await userService.updateTransferredNFT(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return {
    user_id: data.user_id,
    is_activated_NFT: data.is_activated_NFT,
    NFT_id: data.NFT_id,
    expiration: data.expiration,
    NFT_status: data.NFT_status,
  };
};

export default updateTrasferredSubscriptionHandler;
