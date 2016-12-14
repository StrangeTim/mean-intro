import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomePageComponent } from './home-page/home-page.component';


const ROUTES = [
  {
    path: '/',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
