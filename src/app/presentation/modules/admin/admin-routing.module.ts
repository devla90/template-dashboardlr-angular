import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: '', component: AdminComponent,
    children: 
    [
      {
        path:'',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            m => m.DashboardModule,
          ),
      },
      {
        path:'profile',
        component: ProfileComponent
      }
    ]
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./dashboard/dashboard.module').then(
  //       m => m.DashboardModule,
  //     ),
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
