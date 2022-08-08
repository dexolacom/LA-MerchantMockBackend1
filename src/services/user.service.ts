// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET all mint
const getAllUsers = async () => {
  cl.mt(' * GET all users');
  return await db.User.findAll();
};

// GET user by userId and userAddress
const getUserByUserIdAndUserAddress = async data => {
  cl.o(' * GET user by userId and address');
  const { userId, userAddress } = data;
  try {
    return await db.User.findAll({
      where: {
        userId: userId,
        userAddress: userAddress,
      },
    });
  } catch (err) {
    cl.o(' * ERROR in getUserByUserIdAndUserAddress:', err.message);
    return err.message;
  }
};

// GET user by login and password
const getUserByLoginAndPassword = async data => {
  cl.o(' * GET user by userId and address');
  const { login, password } = data;
  try {
    return await db.User.findAll({
      where: {
        login: login,
        password: password,
      },
    });
  } catch (err) {
    cl.o(' * ERROR in getUserByLoginAndPassword:', err.message);
    return err.message;
  }
};

// POST user
const createUser = async data => {
  cl.o(' * POST create user');
  try {
    const result = await db.User.create(data);
    return result.dataValues;
  } catch (err) {
    cl.o(' * ERROR in createUser:', err.message);
    return err.message;
  }
};

// PATCH update nftId and isActivated
const updateUserNFT = async data => {
  const { userId, userAddress, nftId, isActivated } = data;
  cl.mt(` * UPDATE nftId:`, nftId, `and isActivated:`, isActivated);
  try {
    return await db.User.update(
      {
        nftId: nftId,
        isActivated: isActivated,
      },
      {
        where: { userId: userId, userAddress: userAddress },
      }
    );
  } catch (err) {
    cl.o(' * ERROR in updateUserNFT:', err.message);
    return err.message;
  }
};

// PATCH activate (isActivated to false or true)
const updateUserNFTIsActivated = async data => {
  const { userId, userAddress, nftId, isActivated } = data;
  cl.mt(` * UPDATE NFT (id: ${nftId}) to isActivated:`, isActivated);
  try {
    return await db.User.update(
      {
        isActivated: isActivated,
      },
      {
        where: { userId: userId, userAddress: userAddress, nftId: nftId },
      }
    );
  } catch (err) {
    cl.o(' * ERROR in updateUserNFTIsActivated:', err.message);
    return err.message;
  }
};

export default {
  getAllUsers,
  getUserByUserIdAndUserAddress,
  getUserByLoginAndPassword,
  createUser,
  updateUserNFT,
  updateUserNFTIsActivated,
};
