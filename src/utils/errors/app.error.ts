export interface AppError extends Error {
  statusCode: number;
}

// 500 Internal Server Error
export class InternalServerError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Internal Server Error") {
    this.statusCode = 500;
    this.message = message;
    this.name = "InternalServerError";
  }
}

// 400 Bad Request
export class BadRequestError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Bad Request") {
    this.statusCode = 400;
    this.message = message;
    this.name = "BadRequestError";
  }
}

// 401 Unauthorized
export class UnauthorizedError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Unauthorized Access") {
    this.statusCode = 401;
    this.message = message;
    this.name = "UnauthorizedError";
  }
}

// 403 Forbidden
export class ForbiddenError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Forbidden Resource") {
    this.statusCode = 403;
    this.message = message;
    this.name = "ForbiddenError";
  }
}

// 404 Not Found
export class NotFoundError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Resource Not Found") {
    this.statusCode = 404;
    this.message = message;
    this.name = "NotFoundError";
  }
}

// 409 Conflict
export class ConflictError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Resource Conflict") {
    this.statusCode = 409;
    this.message = message;
    this.name = "ConflictError";
  }
}

// 422 Unprocessable Entity
export class UnprocessableEntityError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Unprocessable Entity") {
    this.statusCode = 422;
    this.message = message;
    this.name = "UnprocessableEntityError";
  }
}

// 429 Too Many Requests
export class TooManyRequestsError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Too Many Requests") {
    this.statusCode = 429;
    this.message = message;
    this.name = "TooManyRequestsError";
  }
}

// 503 Service Unavailable
export class ServiceUnavailableError implements AppError {
  statusCode: number;
  message: string;
  name: string;
  constructor(message: string = "Service Temporarily Unavailable") {
    this.statusCode = 503;
    this.message = message;
    this.name = "ServiceUnavailableError";
  }
}