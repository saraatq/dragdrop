import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplitterModule } from 'primeng/splitter';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SplitterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
