import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  genders = ['male', 'female'];
  inputForm!: FormGroup;

  // user: User = {
  //   username: '',
  //   email: '',
  //   phone: '',
  //   password: ''
  // }

  users: User[] = [];

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    // this.inputForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'phoneNumber': new FormControl(null, [Validators.maxLength(11), Validators.minLength(8)]),
    //   'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    //   'passwordConfirm': new FormControl(null, Validators.required)
    // });
    this.registerService.getUsers(); 

  }

  onSubmit() {

    // this.user.username = this.inputForm.value.username;    
    // this.user.email = this.inputForm.value.email;    
    // this.user.phone = this.inputForm.value.phoneNumber;
    // if(this.inputForm.value.password == this.inputForm.value.passwordConfirm) {
    //   this.user.password = this.inputForm.value.password;
    // }
    // this.add(this.user);
    // this.inputForm.reset();
    // for(let i = 0; i < USERS.length; i++) {
      // console.log('{' + JSON.stringify(USERS[i].username) + '},\n{' + JSON.stringify(USERS[i].email) + '},\n{' + JSON.stringify(USERS[i].phone) + '}');
    // }
  }

  getUsers(): void {
    this.registerService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(myUser: User): void {
    myUser.username.trim();
    myUser.email.trim();
    myUser.phone.trim();
    myUser.password.trim();
    // if(!myUser) {return;}
    this.registerService.addUser(myUser).subscribe(user => {this.users.push(user)});
  }

}
