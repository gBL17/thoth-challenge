import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';

@NgModule({
  declarations: [		
    AppComponent,
      NavBarComponent,
      CreateNewUserComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
