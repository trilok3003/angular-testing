import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeadingComponent } from './heading/heading.component';
import { ExpanderComponent } from './expander/expander.component';
import { ClockComponent } from './clock/clock.component';
import { ProgressGraphModule } from './progress-graph/progress-graph.module';
import { LayoutComponent } from './layout/layout.component';
import { ProgressExampleComponent } from './progress-example/progress-example.component';
import { ContentProjectionExComponent } from './content-projection-ex/content-projection-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ExpanderComponent,
    ClockComponent,
    LayoutComponent,
    ProgressExampleComponent,
    ContentProjectionExComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProgressGraphModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
