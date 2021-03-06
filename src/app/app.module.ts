import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { NgxMaskModule } from "ngx-mask";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [		
    AppComponent,
      NavBarComponent,
      CreateNewUserComponent
   ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
