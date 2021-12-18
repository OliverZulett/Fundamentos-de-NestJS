import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

interface User {
  name: string;
  surname: string;
}

@Injectable()
export class ValidatorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user: User = req.body;
    if (
      // (req.method === 'POST' || req.method === 'PATCH') &&
      !user.name ||
      !user.surname
    ) {
      const message = 'Invalid Body Request';
      console.log(message);
      return res.status(400).send(message);
    }
    next();
  }
}
