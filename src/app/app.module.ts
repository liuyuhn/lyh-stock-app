import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TopBarComponent } from './my-component/top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    MyComponentComponent,
    TopBarComponent,
    LoginComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user-home', component: UserComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
