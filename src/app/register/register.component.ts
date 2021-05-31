import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('f') inputForm!: NgForm;
  defaultGender = "male";
  defaultGroup = "مهاجمان";
  groups = ['دروازه بان', 'مدافعان', 'میانداران', 'مهاجمان', 'مربیان'];
  user: User = {
    id: 0,
    name: '',
    family: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: true,
    group: ''
  };


   constructor() { }

  onSubmit() {
    // console.log(this.inputForm);
    this.user.phoneNumber = this.inputForm!.value.phoneNumber;
    // console.log(this.user.phoneNumber);
    console.log(this.user.phoneNumber);
  }

}
