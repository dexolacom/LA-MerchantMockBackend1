// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserPackageHandler = async data => {
  // cl.o(' -- updateUserPackageHandler:', data);

  const result = await userService.updateUserPackage(data);

  if (result[0] === 0) return 'ERROR: 8(';

  return {
    user_id: data.user_id,
    package: data.package,
  };
};

export default updateUserPackageHandler;
