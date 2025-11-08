import type { RequestHandler } from 'express';

interface AuthController {
  registerUser: RequestHandler;
}

const authController = {} as AuthController;

authController.registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return next({
        log: `authController.registerUser - Error: Bad request`,
        status: 400,
        message: { err: 'Failed to get data from DB!!!' },
      });

    const queryRegisterUser = ``;
  } catch (error) {
    return next({
      log: `authController.registerUser - Error: ${error}`,
      status: 500,
      message: { err: 'Failed to get data from DB!!!' },
    });
  }
};

export default authController;
