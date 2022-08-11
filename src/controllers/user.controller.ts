// @ts-nocheck
import { Request, Response } from 'express';
import getUserHandler from './handlers/getUserHandler';
import addUserHandler from './handlers/addUserHandler';
import loginHandler from './handlers/loginHandler';
import updateUserSubscriptionHandler from './handlers/updateUserSubscriptionHandler';
import updateUserMailHandler from './handlers/updateUserMailHandler';
import deactivationHandler from './handlers/deactivationHandler';
import activationHandler from './handlers/activationHandler';
import sortData from '../helpers/sortData';
import { cl } from '../logger';

// GET user
const getUser = async (req: Request, res: Response) => {
  const response = await getUserHandler(req);
  response.length !== 0 || (typeof response !== Boolean && sortData(response));
  res.status(200).send(response);
};

// POST add user
const addUser = async (req: Request, res: Response) => {
  cl.w(`=======> add User`);
  const response = await addUserHandler(req.body);
  cl.w(`<======= sent response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST login
const login = async (req: Request, res: Response) => {
  cl.w(`=======> Login`);
  const response = await loginHandler(req.body);
  cl.w(`<======= sent response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST update user subscription
const updateUserSubscription = async (req: Request, res: Response) => {
  cl.mt(`=======> update subscription id:`, req.body.NFT_id);
  const response = await updateUserSubscriptionHandler(req.body);
  cl.w(`<======= sent response:`, response);
  res
    .status(typeof response === 'string' ? 400 : 200)
    .send(typeof response === 'string' ? response : response.data);
};

// POST update user subscription
const updateUserMail = async (req: Request, res: Response) => {
  cl.mt(`=======> update mail user_id: ${req.body.user_id}`);
  const response = await updateUserMailHandler(req.body);
  cl.w(`<======= sent response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST deactivation
const deactivation = async (req: Request, res: Response) => {
  cl.mt(`=======> update deactivation NFT: ${req.body.NFT_id}`);
  console.log('req.body 1 -->', req.body);
  const response = await deactivationHandler(req.body);
  cl.w(`<======= sent response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST activation
const activation = async (req: Request, res: Response) => {
  cl.mt(`=======> update activation NFT: ${req.body.NFT_id}`);
  const response = await activationHandler(req.body);
  cl.w(`<======= sent response:`, response);
  res
    .status(typeof response === 'string' ? 400 : 200)
    .send(typeof response === 'string' ? response : response.data);
};

export default {
  getUser,
  addUser,
  login,
  updateUserSubscription,
  updateUserMail,
  deactivation,
  activation,
};
