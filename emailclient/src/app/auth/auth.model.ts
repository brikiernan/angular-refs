export interface AuthForm {
  username: string | null;
  password: string | null;
  passwordConfirmation: string | null;
}

export interface UsernameResponse {
  available: boolean;
}

export interface SigninResponse {
  username: string;
}

export interface SignupResponse {
  username: string;
}

export interface SignedinResponse {
  authenticated: boolean;
  username: string;
}
