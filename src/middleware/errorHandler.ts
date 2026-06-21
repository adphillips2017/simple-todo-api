import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }
}

export function errorHandler(
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({ error: err.message });
        return;
    }

    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
}