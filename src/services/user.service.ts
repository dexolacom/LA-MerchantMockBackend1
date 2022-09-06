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
  cl.o(' * GET user by login and password');
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

// POST update package
const updateUserPackage = async data => {
  const { user_id, package: plan } = data;
  cl.mt(` * UPDATE package user_id:`, user_id, plan);
  try {
    return await db.User.update(
      { package: plan },
      { where: { user_id: user_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in updateUserPackage:', err.message);
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
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
        expiration: expiration,
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

// POST update transferred NFT
const updateTransferredNFT = async data => {
  const { user_id, NFT_id, expiration, is_activated_NFT, NFT_status } = data;
  cl.mt(` * UPDATE deactivation NFT:`, NFT_id);
  try {
    return await db.User.update(
      {
        NFT_id: null,
        expiration: null,
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
        package: null,
      },
      {
        where: {
          user_id: user_id,
          NFT_id: NFT_id,
          expiration: expiration,
          is_activated_NFT: !is_activated_NFT,
        },
      }
    );
  } catch (err) {
    cl.o(' * ERROR in updateTransferredNFT:', err.message);
    return err.message;
  }
};

// POST deactivation NFT
const deactivation = async data => {
  const { user_id, NFT_id, is_activated_NFT, NFT_status } = data;
  cl.mt(` * UPDATE deactivation NFT:`, NFT_id);
  try {
    return await db.User.update(
      {
        NFT_id: null,
        expiration: null,
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
        package: null,
      },
      {
        where: {
          user_id: user_id,
          NFT_id: NFT_id,
          is_activated_NFT: !is_activated_NFT,
        },
      }
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
        is_activated_NFT: is_activated_NFT,
        NFT_status: NFT_status,
        expiration: expiration,
      },
      { where: { user_id: user_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in activation:', err.message);
    return err.message;
  }
};

// UPDATE update subscription extend date
const updateUserSubscriptionExtendDate = async data => {
  const { user_id, NFT_id, expiration } = data;
  cl.mt(` * UPDATE update subscription extend date NFT:`, NFT_id);
  try {
    return await db.User.update(
      { expiration: expiration },
      { where: { user_id: user_id, NFT_id: NFT_id } }
    );
  } catch (err) {
    cl.o(' * ERROR in updateUserSubscriptionExtendDate:', err.message);
    return err.message;
  }
};

export default {
  getAllUsers,
  getUserById,
  getUserByLoginAndPassword,
  addUser,
  updateUserPackage,
  updateUserSubscription,
  updateUserMail,
  updateTransferredNFT,
  deactivation,
  activation,
  updateUserSubscriptionExtendDate,
};
