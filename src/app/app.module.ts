import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

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
import { ClassComponent } from './class/class.component';
import { CompareListComponent } from './user/compare-list/compare-list.component';
import { IPOListComponent } from './user/ipo-list/ipo-list.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GenerateChartComponent } from './user/generate-chart/generate-chart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePassComponent } from './user/change-pass/change-pass.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// // import module
// import { ElModule } from 'element-angular'

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
    ClassComponent, 
    CompareListComponent,
    IPOListComponent,
    GenerateChartComponent,
    SignUpComponent,
    ChangePassComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIpoComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,       
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
    FileUploadModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // ElModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user-home', component: UserComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'change-pass', component: ChangePassComponent },
      { path: 'admin-home', component: AdminComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
    
  }
 }
