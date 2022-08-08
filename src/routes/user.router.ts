import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.route('/').get(userController.getUser);
router.route('/login').get(userController.login);
router.route('/create').post(userController.createUser);
router.route('/nft').patch(userController.updateUserNFT);
router.route('/activate').patch(userController.activateUserNFT);

export default router;
