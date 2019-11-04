import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { FiltroProductosPipe } from './pipes/filtro-productos.pipe';
import { MonedaPipe } from './pipes/moneda.pipe';
import { ProductoServiceService } from './../services/producto-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormularioComponent } from './formulario/formulario.component';

import * as $ from 'jquery';
import { ListadoComponent } from './listado/listado.component';
import { VerComponent } from './ver/ver.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    VerComponent,
    MonedaPipe,
    FiltroProductosPipe,
    NoencontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    MyDatePickerModule
  ],
  providers: [
    ProductoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
