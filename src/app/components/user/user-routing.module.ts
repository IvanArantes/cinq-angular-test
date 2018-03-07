import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserHostComponent } from './user-host/user-host.component';

const userRoutes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'users',
    component: UserHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
