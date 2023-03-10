export const REGISTER_REGEX = {
  username: /^[a-zA-Z0-9_-]{3,16}$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,50}$/
}

export const REGISTER_ERRORS = {
  username: 'The username is invalid. It must be between 3 and 16 characters long, and can only contain letters, numbers, hyphens(-), and underscores(_).',
  password: 'Password must contain at least 8 characters, and max 50 characters, including at least one uppercase letter, one lowercase letter, and one symbol (such as @, #, $, etc.)',
  confirmPassword: 'Password and confirmPassword must have the same value.'
}
