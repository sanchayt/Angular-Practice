import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { Routes } from '@angular/router/src/config';

const appRoutes: Routes =
  [
    {
      path: 'stopwatch',
      component: StopwatchComponent
    },
    {
      path: 'servers',
      component: ServersComponent
    }
  ];



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
