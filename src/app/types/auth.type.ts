import { ErrorType } from '../types/common.type';

export type SignInType = {
  email: string;
  password: string;
};

export type SignInResultType = {
  isSignIn: boolean;
  error: ErrorType;
};

export type CurrentUserType = {
  uid: string;
  refreshToken: string;
  photoURL: string;
  phoneNumber: string;
  email: string;
  displayName: string;
};
