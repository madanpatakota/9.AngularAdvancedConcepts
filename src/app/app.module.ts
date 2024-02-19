import { NgModule } from '@angular/core';
import { BrowserModule , } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicPipe } from './custom-pipes/basic.pipe';
import { BasicPipeWithMultiParamsPipe } from './custom-pipes/basic-pipe-with-multi-params.pipe';
import { FormsModule  } from '@angular/forms';
import { SearchRecordPipe } from './custom-pipes/search-record.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BasicPipe,
    BasicPipeWithMultiParamsPipe,
    SearchRecordPipe
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
