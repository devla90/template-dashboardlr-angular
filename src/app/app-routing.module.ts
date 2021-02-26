import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
      path: 'login',
      loadChildren: () =>
          import('./presentation/pages/login-page/login-page.module').then(
              m => m.LoginPageModule,
          ),
  },
  {
      path: '**',
      redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
