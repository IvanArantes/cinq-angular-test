import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from '../../services/user/user.service';
import { UserRoutingModule } from './user-routing.module';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ModalComponent } from '../layout/modal/modal.component';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [ListUsersComponent, FilterPipe, UserDetailsComponent, ModalComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
