export class BadRequestException extends Error {
  constructor(message: string = "Bad request") {
    super(message);
  }
}
