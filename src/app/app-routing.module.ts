import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminRoleGuard } from './guard/admin-role.guard';
import { ProtectedGuard } from './guard/protected.guard';

const routes: Routes = [
  {
    path:'movies',
    canActivate: [ProtectedGuard, AdminRoleGuard],
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule) 
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {menu: false}
  },
  {
    path:'register',
    component: RegisterComponent,
    data: {menu: false}
  },
  {
    //canActivate: [UserRoleGuard],
    path: 'cart',
    loadChildren: () => import('./components/cart/cart.module').then( m => m.CartModule),
    data:{menu:true}
  },
  {
    path: '',
    redirectTo: 'cartelera',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
