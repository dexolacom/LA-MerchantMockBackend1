// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateTrasferredSubscriptionHandler = async data => {
  // cl.o(' -- updateTrasferredSubscriptionHandler', data);

  const result = await userService.updateTransferredNFT(data);

  if (result[0] === 0) return 'ERROR (mock): transfer deactivation failed';

  const _user = await userService.getUserById(data.user_id);

  if (_user?.length > 0) {
    if (_user[0].NFT_id === null) {
      cl.mt(' - user transfer deactivation success:', true);
      return _user[0];
    } else return `user is not deactivated: ${result}`;
  } else return `transfer deactivation was not successful: ${result}`;
};

export default updateTrasferredSubscriptionHandler;
