import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

import { FormsModule} from "@angular/forms";
import  { HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    TopBarComponent,
    UpdateEmployeeComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({

      loader: {

        provide: TranslateLoader,

        useFactory: httpTranslateLoader,

        deps: [HttpClient]

      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http);

}
