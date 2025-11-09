import type { RequestHandler } from 'express';
import { z, ZodError } from 'zod';

export const validate =
  (schema: z.ZodSchema): RequestHandler =>
  (req, res, next) => {
    try {
      schema.parse(req.body);

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = z.treeifyError(error);
        return res.status(400).json({
          message: 'Validation failed',
          errors,
        });
      }
      return next({
        log: `Validation Middleware Error: ${error}`,
        status: 500,
        message: { err: 'Internal validation error' },
      });
    }
  };
