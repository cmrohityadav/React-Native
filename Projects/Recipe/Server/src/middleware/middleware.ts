import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

interface DecodeToken {
  userId: string;
}

export interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'No valid token is provided! Authorization is denied',
    });
    return; // ✅ Exit early, do not return the response object
  }

  try {
    const decoded = Jwt.verify(token, 'JWTSecreat') as DecodeToken;
    req.userId = decoded.userId;
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Token is not valid. Please try again',
    });
    return; // ✅ Exit here too
  }

  next(); // ✅ If token is valid, move to next handler
};
