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
import { CompareListComponent } from './user/compare-list/compare-list.component';
import { IPOListComponent } from './user/ipo-list/ipo-list.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GenerateChartComponent } from './user/generate-chart/generate-chart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePassComponent } from './user/change-pass/change-pass.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';


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
    CompareListComponent,
    IPOListComponent,
    GenerateChartComponent,
    SignUpComponent,
    ChangePassComponent,
    ImportDataComponent,
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,       
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user-home', component: UserComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'change-pass', component: ChangePassComponent },
      { path: 'admin-home', component: AdminComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    
  }
 }
