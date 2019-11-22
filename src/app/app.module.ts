import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { LoginFormComponent } from './login-form/login-form.component';
import { MapComponent } from './map/map.component';

import { AlertComponent } from './components/alert.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from './services';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {JwtInterceptor} from './helpers/jwt.interceptor';


// @ts-ignore
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'users', component: UserDetailsComponent},
      {path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterComponent },

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNHTcvkF3iDQga5eOIyiZiHIrip3vFdJM'
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    [NguCarouselModule]
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    UserDetailsComponent,
    NavBarComponent,
    LoginFormComponent,
    MapComponent,
    AlertComponent,
    RegisterComponent,
    ],
  entryComponents: [NavBarComponent, LoginFormComponent],
  bootstrap: [ AppComponent ],
  providers: [CartService, UserService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
