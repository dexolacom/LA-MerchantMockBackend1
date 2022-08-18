// @ts-nocheck
import { Request, Response } from 'express';
import getUserHandler from './handlers/getUserHandler';
import addUserHandler from './handlers/addUserHandler';
import loginHandler from './handlers/loginHandler';
import updateUserPackageHandler from './handlers/updateUserPackageHandler';
import updateUserSubscriptionHandler from './handlers/updateUserSubscriptionHandler';
import updateUserMailHandler from './handlers/updateUserMailHandler';
import updateTrasferredSubscriptionHandler from './handlers/updateTrasferredSubscriptionHandler';
import deactivationHandler from './handlers/deactivationHandler';
import activationHandler from './handlers/activationHandler';
import userService from '../services/user.service';
import sortData from '../helpers/sortData';
import { cl } from '../logger';

// GET all users
const getAllUsers = async (req: Request, res: Response) => {
  const response = await userService.getAllUsers(req);
  typeof response !== 'string' && response.length > 1 && sortData(response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// GET user
const getUser = async (req: Request, res: Response) => {
  const response = await getUserHandler(req);

  typeof response !== 'boolean' &&
    typeof response !== 'string' &&
    response.length > 1 &&
    sortData(response);

  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST add user
const addUser = async (req: Request, res: Response) => {
  cl.w(`=======> add User`);
  const response = await addUserHandler(req.body);
  cl.w(`<======= sent Registration response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST login
const login = async (req: Request, res: Response) => {
  cl.w(`=======> Login`);
  const response = await loginHandler(req.query);
  cl.w(`<======= sent Login response to front:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST update user package
const updateUserPackage = async (req: Request, res: Response) => {
  cl.mt(`=======> update package user_id:`, req.body.user_id);
  const response = await updateUserPackageHandler(req.body);
  cl.w(`<======= sent package response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST update user subscription
const updateUserSubscription = async (req: Request, res: Response) => {
  cl.mt(`=======> update subscription id:`, req.body.NFT_id);
  const response = await updateUserSubscriptionHandler(req.body);
  cl.w(`<======= sent Mint response:`, response);
  res
    .status(typeof response === 'string' ? 400 : 200)
    .send(typeof response === 'string' ? response : response.data);
};

// POST update user mail
const updateUserMail = async (req: Request, res: Response) => {
  cl.mt(`=======> update mail user_id: ${req.body.user_id}`);
  const response = await updateUserMailHandler(req.body);
  cl.w(`<======= sent Mail response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST update transferred NFT
const updateTrasferredSubscription = async (req: Request, res: Response) => {
  cl.mt(`=======> update transferred NFT: ${req.body.NFT_id}`);
  const response = await updateTrasferredSubscriptionHandler(req.body);
  cl.w(`<======= sent transferFrom response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST deactivation
const deactivation = async (req: Request, res: Response) => {
  cl.mt(`=======> update deactivation NFT: ${req.body.NFT_id}`);
  const response = await deactivationHandler(req.body);
  cl.w(`<======= sent deactivation response:`, response);
  res.status(typeof response === 'string' ? 400 : 200).send(response);
};

// POST activation
const activation = async (req: Request, res: Response) => {
  cl.mt(`=======> update activation NFT: ${req.body.NFT_id}`);
  const response = await activationHandler(req.body);
  cl.w(`<======= sent activation response:`, response);
  res
    .status(typeof response === 'string' ? 400 : 200)
    .send(typeof response === 'string' ? response : response.data);
};

export default {
  getAllUsers,
  getUser,
  addUser,
  login,
  updateUserPackage,
  updateUserSubscription,
  updateUserMail,
  updateTrasferredSubscription,
  deactivation,
  activation,
};
