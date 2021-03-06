import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { AboutComponent } from './+about/index';
import { HomeComponent } from './+home/index';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NewsService} from "./services/news.service";

@Component({
  moduleId: module.id,
  selector: 'ip-app',
  viewProviders: [HTTP_PROVIDERS, NewsService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
])
export class AppComponent {}
