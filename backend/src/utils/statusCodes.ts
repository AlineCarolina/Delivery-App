export const statusCodes = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
  ERROR_INTERN: 500,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  CONFLICT: 409,
};
  
export const messageErrors = {
  PASSWORD_LENGTH: '"password" length must be 6 characters long',
  TOKEN_INVALID: 'Expired or invalid token',
  UNAUTHORIZED_USER: 'Unauthorized user',
  TOKEN_NOT_FOUND: 'Token not found',
  ERROR_SERVER: 'Internal server error',
  USER_REGISTER: 'Email already in use',
  NOT_EXIST_USER: 'User does not exist',
  EMAIL_REQUIRED: '"email" is required',
  EMAIL_VALID: '"email" must be a valid email',
  EMAIL_IS_NOT: '"email" is not allowed to be empty',
  PASSWORD_IS_REQUIRED: '"password" is required',
  PASSWORD_IS_NOT: '"password" is not allowed to be empty',
  FIELDS_INV: 'Invalid fields',
  NOT_FOUND: 'Not found',
};
