import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {EmployeeService} from './services/employee.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeinfoComponent } from './components/employeeinfo/employeeinfo.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { from } from 'rxjs';
import { EmployeesComponent } from './components/employees/employees.component';





export const  firebaseConfig = {
  apiKey: "AIzaSyD0DFc1UFQC2BF7V5l_JkYjjQdEDaUKjbw",
  authDomain: "employeemanagement-550a1.firebaseapp.com",
  databaseURL: "https://employeemanagement-550a1.firebaseio.com",
  projectId: "employeemanagement-550a1",
  storageBucket: "employeemanagement-550a1.appspot.com",
  messagingSenderId: "1054431704442",
  appId: "1:1054431704442:web:f066a782b102c34d59d2c3",
  measurementId: "G-QGH5PG66LT"
};


const appRoutes :Routes=[
  {path:'',component:DashboardComponent},
  {path:'Login',component:LoginComponent },
  {path:'register',component:RegisterComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeinfoComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
     

  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
