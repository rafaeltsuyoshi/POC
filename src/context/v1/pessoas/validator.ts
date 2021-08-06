import { Request, Response, NextFunction } from "express";

export function validator(req: Request, res: Response, next: NextFunction) {
    console.log("passando no validator")
    return next();
}