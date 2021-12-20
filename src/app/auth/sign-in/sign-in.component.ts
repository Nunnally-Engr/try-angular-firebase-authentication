import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { SignInType, SignInResultType } from '../../types/auth.type';
import { ErrorType } from '../../types/common.type';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signIn: SignInType = {
    email: '',
    password: '',
  };
  public error: ErrorType = {
    code: '',
    message: '',
  };

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {}

  public async onClickSignIn(): Promise<void> {
    // 初期化
    this.error.code = '';
    this.error.message = '';

    // サインイン
    const result: SignInResultType = await this.authService.signIn(
      this.signIn.email,
      this.signIn.password
    );
    if (result.isSignIn) {
      // サインイン: 成功
      const currentUser = await this.authService.getCurrentUser();
      console.info('--- currentUser ---');
      console.info(currentUser);
    } else {
      // サインイン: 失敗
      this.error = result.error;
    }
  }
}
