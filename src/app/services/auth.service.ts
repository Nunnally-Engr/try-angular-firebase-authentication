import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { CurrentUserType, SignInResultType } from '../../app/types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  public async signIn(
    email: string,
    password: string
  ): Promise<SignInResultType> {
    const result: SignInResultType = await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return {
          isSignIn: true,
          error: { code: '', message: '' },
        };
      })
      .catch((error) => {
        return {
          isSignIn: false,
          error: {
            code: error.code.toString(),
            message: error.message.toString(),
          },
        };
      });

    return result;
  }

  public async getCurrentUser(): Promise<CurrentUserType> {
    const currentUser = await this.afAuth.currentUser.then((user) => {
      const currentUser: CurrentUserType = {
        uid: user?.uid || '',
        refreshToken: user?.refreshToken || '',
        photoURL: user?.photoURL || '',
        phoneNumber: user?.phoneNumber || '',
        email: user?.email || '',
        displayName: user?.displayName || '',
      };
      return currentUser;
    });
    return currentUser;
  }
}
