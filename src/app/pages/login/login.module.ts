import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';

import { LoginPage } from './login.page';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  imports: [TuiButtonModule, LoginRoutingModule],
  exports: [LoginPage],
  declarations: [LoginPage],
  providers: [],
})
export class LoginModule {}
