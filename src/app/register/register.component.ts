import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from '../register.service';

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

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.maxLength(11), Validators.minLength(8)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'passwordConfirm': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

    this.user.username = this.inputForm.value.username;    
    this.user.email = this.inputForm.value.email;    
    this.user.phone = this.inputForm.value.phoneNumber;
    if(this.inputForm.value.password == this.inputForm.value.passwordConfirm) {
      this.user.password = this.inputForm.value.password;
    }
    this.registerService.getUsers(this.user);    
    this.inputForm.reset();
  }

}
