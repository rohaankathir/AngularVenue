import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 

import { MatExpansionModule, 
  MatMenuModule, MatSidenavModule, MatToolbarModule, 
  MatButtonModule, MatIconModule, MatDialogModule,
  MatListModule } 
  from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customer/customer.component';

/*
  Following will create a new module and also register in app.module
  ng g m products/product --flat -m app.module
  m - module
  products - folder name
  product - module name
  flat - don't create a new folder
  m - to register to a module specify the module name again
*/


@NgModule({
  declarations: [ 
    // List of components that belongs to this module
    AppComponent,
    WelcomeComponent,
    CustomerComponent
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,   
    // Feature modules. Include them all here
    // Also remember, angular will register the routes in the order we specify here.
    ProductModule,
    AppRoutingModule,

    // Angular Animations and Material Design imports
    BrowserAnimationsModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatDialogModule,
    MatListModule
  ],
  // It is always recommended to register it only once to use the Singleton. So always register this once in only app module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
