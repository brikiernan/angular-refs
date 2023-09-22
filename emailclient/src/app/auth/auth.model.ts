export const ENDPOINT = 'https://api.angular-email.com/auth';

export interface AuthForm {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface UsernameResponse {
  available: boolean;
}
