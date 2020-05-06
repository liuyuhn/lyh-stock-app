import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ServiceComponent } from './service/service.component';
import { DynamicFormComponent } from './user/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './user/dynamic-form-question/dynamic-form-question.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    MyComponentComponent,
    TopBarComponent,
    LoginComponent,
    UserNavComponent,
    ServiceComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    ClassComponent, 
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,       
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
export class AppModule {
  constructor(){
    
  }
 }
