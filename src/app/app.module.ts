// import { MatTabsModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
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
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './services/message.service';
import { MapsItemComponent } from './maps-item/maps-item.component';
import { OffersComponent } from './offers/offers.component';
import { GroupsComponent } from './groups/groups.component';

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
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'offers',
      component: OffersComponent
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
    CaseReversalComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    MapsItemComponent,
    OffersComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
