import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'features/home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'features/login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
