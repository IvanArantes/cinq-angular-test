import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';


const routes: Routes = [

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
