// @ts-nocheck
import userService from '../../services/user.service';
import { cl } from '../../logger';

const updateUserPackageHandler = async data => {
  // cl.o(' -- updateUserPackageHandler:', data);

  const _user = await userService.getUserById(data.user_id);

  if (_user.length > 0) {
    if (_user[0].package === data.package) {
      cl.o(` -- impossible to update the same package (${data.package})`);
      return 'impossible to update the same package';
    }

    const result = await userService.updateUserPackage(data);

    if (result[0] === 0) return 'ERROR: 8(';

    return {
      user_id: data.user_id,
      package: data.package,
    };
  } else {
    cl.o(` -- there is no user with an id:`, data.user_id);
    return `there is no user with an id: ${data.user_id}`;
  }
};

export default updateUserPackageHandler;
