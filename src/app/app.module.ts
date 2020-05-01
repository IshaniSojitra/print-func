import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : "", component: MainPageComponent},
      {path : "preview", component: PreviewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
