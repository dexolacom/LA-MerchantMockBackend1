// @ts-nocheck
import db from '../db/connect';
import { cl } from '../logger';

// GET all mint
const getAllUsers = async () => {
  cl.mt(' * GET all users');
  return await db.User.findAll();
};

// GET user by id
const getUserById = async user_id => {
  cl.mt(' * GET user by id:', user_id);
  try {
    return await db.User.findAll({
      where: { user_id: user_id },
    });
  } catch (err) {
    cl.o(' * ERROR in getUserById:', err.message);
    return err.message;
  }
};

// GET user by login and password
const getUserByLoginAndPassword = async data => {
  cl.o(' * GET user by userId and address');
  const { user_id, login, password } = data;
  try {
    return await db.User.findAll({
      where: {
        user_id: user_id,
        login: login,
        password: password,
      },
    });
  } catch (err) {
    cl.o(' * ERROR in getUserByLoginAndPassword:', err.message);
    return err.message;
  }
};

// POST add user
const addUser = async data => {
  cl.o(' * POST add user');
  try {
    const result = await db.User.create(data);
    return result.dataValues;
  } catch (err) {
    cl.o(' * ERROR in addUser:', err.message);
    return err.message;
  }
};

// POST update subscription (mint)
const updateUserSubscription = async data => {
  const { user_id, NFT_id, expiration, is_activated_NFT, NFT_status } = data;
  cl.mt(` * UPDATE subscription id:`, NFT_id);
  try {
    return await db.User.update(
      {
        NFT_id: NFT_id,
        expiration: expiration,
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
      },
      { where: { user_id: user_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in updateSubscription:', err.message);
    return err.message;
  }
};

// POST update nftId and isActivated (mint)
const updateUserMail = async data => {
  const { user_id, is_waitlist } = data;
  cl.mt(` * UPDATE mail user_id:`, user_id);
  try {
    return await db.User.update(
      { is_waitlist: is_waitlist },
      { where: { user_id: user_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in updateUserMail:', err.message);
    return err.message;
  }
};

// POST deactivation NFT
const deactivation = async data => {
  const { user_id, NFT_id, expiration, is_activated_NFT, NFT_status } = data;
  cl.mt(` * UPDATE deactivation NFT:`, user_id);
  try {
    return await db.User.update(
      {
        NFT_id: null,
        expiration: expiration,
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
      },
      { where: { user_id: user_id, NFT_id: NFT_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in deactivation:', err.message);
    return err.message;
  }
};

// POST activation NFT
const activation = async data => {
  const { user_id, NFT_id, expiration, is_activated_NFT, NFT_status } = data;
  cl.mt(` * UPDATE activation NFT:`, NFT_id);
  try {
    return await db.User.update(
      {
        NFT_id: NFT_id,
        expiration: expiration,
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
      },
      { where: { user_id: user_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in activation:', err.message);
    return err.message;
  }
};

export default {
  getAllUsers,
  getUserById,
  getUserByLoginAndPassword,
  addUser,
  updateUserSubscription,
  updateUserMail,
  deactivation,
  activation,
};
