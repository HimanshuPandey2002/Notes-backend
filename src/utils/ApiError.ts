class ApiError extends Error {
  statusCode: number;
  errors: string[];
  stack?: string;
  message: string;
  data: any;
  success: boolean;

  constructor(
    statusCode: number,
    errors: string[],
    stack: string,
    message = "Something went wrong"
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
