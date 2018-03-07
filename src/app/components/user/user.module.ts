import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { UserRoutingModule } from './user-routing.module';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ModalComponent } from '../layout/modal/modal.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { UserTableComponent } from './user-table/user-table.component';
import { UserHostComponent } from './user-host/user-host.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [FilterPipe, UserDetailsComponent, ModalComponent, UserTableComponent, UserHostComponent, UserCardComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
