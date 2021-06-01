import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  genders = ['male', 'female'];
  inputForm: FormGroup;

  constructor(inputForm: FormGroup) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup)({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'phoneNumber': new FormControl(null),
      'password': new FormControl(null),
      'password-confirm': new FormControl(null)
    });
  }

}
