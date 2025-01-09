import { Request, Response, NextFunction } from "express";
import { BadRequestException } from "../exceptions/bad-request-exception";
import { NotFoundException } from "../exceptions/not-found-exception";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof NotFoundException) {
    res.status(404).send(err.message);
  } else if (err instanceof BadRequestException) {
    res.status(400).send(err.message);
  } else {
    res.status(500).send("Internal Server Error");
  }
}
