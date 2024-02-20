import { NgModule } from '@angular/core';
import { BrowserModule , } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicPipe } from './custom-pipes/basic.pipe';
import { BasicPipeWithMultiParamsPipe } from './custom-pipes/basic-pipe-with-multi-params.pipe';
import { FormsModule  } from '@angular/forms';
import { SearchRecordPipe } from './custom-pipes/search-record.pipe';
import { MdBasicColorDirective } from './custom-directives/md-basic-color.directive';
import { CustomPipesComponent } from './Features/custom-pipes/custom-pipes.component';
import { CustomDirectivesComponent } from './Features/custom-directives/custom-directives.component';
import { MdAdvancedColorDirective } from './custom-directives/md-advanced-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicPipe,
    BasicPipeWithMultiParamsPipe,
    SearchRecordPipe,
    MdBasicColorDirective,
    CustomPipesComponent,
    CustomDirectivesComponent,
    MdAdvancedColorDirective
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
