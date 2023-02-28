import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  { path: 'en', component: AppComponent, data: { locale: 'en-US' } },
  { path: 'es', component: AppComponent, data: { locale: 'es' } }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot()
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
