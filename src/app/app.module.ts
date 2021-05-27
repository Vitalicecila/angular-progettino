import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChiaveService } from './chiave.service';
import { MostraComponent } from './mostra/mostra.component';
import { NuovoComponent } from './nuovo/nuovo.component';
//aggiunto manualmente
import { HttpClientModule } from '@angular/common/http';
import { GetKeyComponent } from './get-key/get-key.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    MostraComponent,
    NuovoComponent,
    GetKeyComponent
  ],
  bootstrap: [AppComponent],
  providers: [ChiaveService]
})
export class AppModule {}
