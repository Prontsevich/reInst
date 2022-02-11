import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  public onClick() {}
}
