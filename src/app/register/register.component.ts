import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { User } from '../user';

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
    password: '',
    group: ''
  }

  constructor() {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'phoneNumber': new FormControl(null),
      'password': new FormControl(null),
      'passwordConfirm': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.inputForm);
    console.log(this.inputForm.value.username);
    console.log(this.inputForm.value.email);
    console.log(this.inputForm.value.phoneNumber);
    console.log(this.inputForm.value.password);
    console.log(this.inputForm.value.passwordConfirm);
    this.user.username = this.inputForm.value.username;
    this.user.email = this.inputForm.value.email;
    this.user.phone = this.inputForm.value.phoneNumber;
    if(this.inputForm.value.password == this.inputForm.value.passwordConfirm) {
      this.user.password = this.inputForm.value.password;
    }
    console.log(this.user.username);
    console.log(this.user.email);
    console.log(this.user.phone);
    if(this.user.password == '') {
      console.log("ERROR");
    }else {
      console.log(this.user.password);
    }
    this.inputForm.reset();
  }

}
