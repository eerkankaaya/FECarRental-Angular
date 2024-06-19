import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FiterPipePipe } from './pipes/fiter-pipe.pipe';
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CarAddComponent,
    CartSummaryComponent,
    VatAddedPipe,
    FiterPipePipe,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
