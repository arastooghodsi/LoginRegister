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

  user: User = {
    username: '',
    email: '',
    phone: '',
    password: ''
  }

  users: User[] = [];
  

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.maxLength(11), Validators.minLength(8)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'passwordConfirm': new FormControl(null, Validators.required)
    });
    this.getUsers(); 

  }

  onSubmit() {

    this.user.username = this.inputForm.value.username;    
    this.user.email = this.inputForm.value.email;    
    this.user.phone = this.inputForm.value.phoneNumber;
    if(this.inputForm.value.password == this.inputForm.value.passwordConfirm) {
      this.user.password = this.inputForm.value.password;
    }
    this.inputForm.reset();
    
  }

  getUsers(): void {
    this.registerService.getUsers().then((users: User[]) => this.users = users);
  }


  add(newUsername: string, newEmail: string, newPhone: string, newPassword: string): void {
    let newUser: User = {username: newUsername, email: newEmail, phone: newPhone, password: newPassword}
    this.registerService.addUser(newUser);
  }

  printUser() {
    for(let i = 0; i < this.users.length; i++) {
      console.log('{' + JSON.stringify(this.users[i].username) + '}');
    }
  }

}
