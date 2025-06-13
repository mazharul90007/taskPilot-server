
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { role: string; id: string };
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
      req.user = decoded; // Attach user info to request
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
};

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: string };
    }
  }
}