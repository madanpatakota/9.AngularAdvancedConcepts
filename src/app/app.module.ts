import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicPipe } from './custom-pipes/basic.pipe';
import { BasicPipeWithMultiParamsPipe } from './custom-pipes/basic-pipe-with-multi-params.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicPipe,
    BasicPipeWithMultiParamsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
