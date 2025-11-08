import express from 'express';
import authController from '../controllers/auth.controller.js';

const apiRouter = express.Router();

apiRouter.post('/auth/register', authController.registerUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

export default apiRouter;
