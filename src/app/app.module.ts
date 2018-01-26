import { MatTabsModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { Routes } from '@angular/router/src/config';
import { CategoriesComponent } from './categories/categories.component';
import { TodoComponent } from './todo/todo.component';
import { CaseReversalComponent } from './case-reversal/case-reversal.component';

const appRoutes: Routes =
  [
    {
      path: 'stopwatch',
      component: StopwatchComponent
    },
    {
      path: 'servers',
      component: ServersComponent
    },
    {
      path: 'todo',
      component: TodoComponent
    },
    {
      path: 'case-reversal',
      component: CaseReversalComponent
    }
  ];




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    StopwatchComponent,
    CategoriesComponent,
    TodoComponent,
    CaseReversalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
