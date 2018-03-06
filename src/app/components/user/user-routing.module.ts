import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const userRoutes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'users',
    component: ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
