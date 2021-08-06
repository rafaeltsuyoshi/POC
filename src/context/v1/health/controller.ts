import { NextFunction, Request, Response } from "express";

export class HealthController {
    async handle(): Promise<boolean> {
      return true
    }
  }