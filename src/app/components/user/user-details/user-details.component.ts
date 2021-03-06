import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../domains/user';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
//The discard unsaved changes could be done with CanDeactivate, but I prefered to make a modal component for it.

  private user: User;
  private users: User[];
  private userForm: FormGroup;
  private tituloModal: String = "Are you sure you want to cancel?";
  private bodyModal: String = "The changes made will be discarded";

  private openModal = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit() {
   this.getSelectedUser(); 
  }

  getSelectedUser() {
    this.route.paramMap
    .switchMap((params : ParamMap) =>
    this.userService.getUser(params.get('id'))).subscribe(res => {
      this.user = res as User;
      this.userService.readJsonFile().subscribe(resp => {
        this.users = resp as User[];
      });
      this.fillForm();
      console.log(this.users);
    }
  );
  }

  createForm() {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [''],
      description: ['']
    })
  }

  fillForm() {
    this.userForm.patchValue({
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      age: this.user.age,
      description: this.user.description
    });
  }

  public modalHandler(){
    if(this.userForm.touched) {
      this.openModal = true;
    } else {
      this.returnToList();
    }
  }

  public returnToList() {
    this.router.navigate(['/users']);
  }

  public closeModal() {
    this.openModal = false;
  }

  public saveEditions() {
      this.userService.saveUser(this.userForm.value, this.users);
      this.returnToList();
  }
}
