import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/admin', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/admin/profile', title: 'Profile', icon: 'person', class: '' },
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public menuItems: any[];

  constructor() { }

  ngOnInit(){
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
