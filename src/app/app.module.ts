import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodoComponent } from './todo/todo/todo.component';
// import { CounterComponent } from './cart/counter/counter.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CartModule } from './cart/cart.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoModule } from './todo/todo.module';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    CartModule,
    FormsModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
