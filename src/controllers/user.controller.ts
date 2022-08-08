// @ts-nocheck
import { Request, Response } from 'express';
import getUserHandler from './handlers/getUserHandler';
import createUserHandler from './handlers/createUserHandler';
import loginHandler from './handlers/loginHandler';
import updateUserNFTHandler from './handlers/updateUserNFTHandler';
import activateUserNFTHandler from './handlers/activateUserNFTHandler';
import sortData from '../helpers/sortData';
import { cl } from '../logger';

// GET user
const getUser = async (req: Request, res: Response) => {
  const response = await getUserHandler();
  sortData(response);
  res.status(200).send(response);
};

// POST create user
const createUser = async (req: Request, res: Response) => {
  cl.w(`=======> create User (wallet: ${req.body.userAddress.slice(0, 7)}...)`);
  const response = await createUserHandler(req.body);
  cl.w(`<======= sent response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST login
const login = async (req: Request, res: Response) => {
  cl.w(`=======> Login`);
  const response = await loginHandler(req.body);
  cl.w(`<======= sent response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// PATCH add nftId
const updateUserNFT = async (req: Request, res: Response) => {
  cl.w(`=======> update NFT (id: ${req.body.nftId})`);
  const response = await updateUserNFTHandler(req.body);
  cl.w(`<======= sent response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// PATCH update isActivated
const activateUserNFT = async (req: Request, res: Response) => {
  cl.w(
    `=======> ${
      req.body.isActivated === true ? 'Activate' : 'Deactivate'
    } NFT (id: ${req.body.nftId})`
  );
  const response = await activateUserNFTHandler(req.body);
  cl.w(`<======= sent response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

export default {
  getUser,
  createUser,
  login,
  updateUserNFT,
  activateUserNFT,
};
