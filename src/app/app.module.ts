import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WellsandComponent } from './wellsand/wellsand.component';
import { ShreenathjiComponent } from './shreenathji/shreenathji.component';
import { PreviewWellsandComponent } from './preview-wellsand/preview-wellsand.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    MainPageComponent,
    WellsandComponent,
    ShreenathjiComponent,
    PreviewWellsandComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : "", component: MainPageComponent},
      {path : "preview", component: PreviewComponent},
      {path : "previewwellsand", component: PreviewWellsandComponent},
      {path : "wellsand", component: WellsandComponent},
      {path : "shreenathji", component: ShreenathjiComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
