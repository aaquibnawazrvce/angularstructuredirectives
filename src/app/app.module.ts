import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { Ngifdemo2Component } from './ngifdemo2/ngifdemo2.component';
import { Ngifdemo3Component } from './ngifdemo3/ngifdemo3.component';

import { Ngfordemo2Component } from './ngfordemo2/ngfordemo2.component';
import { Ngfordemo3Component } from './ngfordemo3/ngfordemo3.component';
import { Ngfordemo4Component } from './ngfordemo4/ngfordemo4.component';
import { EmployeeserviceService } from './employeeservice.service';
import { Ngfordemo1Component } from './ngfordemo1/ngfordemo1.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifdemoComponent,
    Ngifdemo2Component,
    Ngifdemo3Component,
    Ngfordemo1Component,
    Ngfordemo2Component,
    Ngfordemo3Component,
    Ngfordemo4Component,
    SwitchexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
