import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyCustomPage } from './my-custom/my-custom.page';
import { MyCustomPageWithIdPage } from './my-custom/my-custom-page-with-id/my-custom-page-with-id.page';

@NgModule({
  declarations: [AppComponent, MyCustomPage, MyCustomPageWithIdPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
