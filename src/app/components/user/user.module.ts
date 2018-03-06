import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from '../../services/user/user-service.service';
import { UserRoutingModule } from './user-routing.module';
import { FilterPipe } from '../../pipes/filter/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [ListUsersComponent, FilterPipe],
  providers: [
    UserService
  ]
})
export class UserModule { }
