import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListUsersComponent } from './components/user/list-users/list-users.component';


const routes: Routes = [
  {
    path: 'users',
    component: ListUsersComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
