import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
    // this.getUsers();
  }

  onSubmit() {
    this.user.username = this.inputForm.value.username;
    this.user.password = this.inputForm.value.password;
  }

  getUsers(): void {
    this.registerService.getUsers().then((users: User[]) => this.users = users);
  }

  loginBTN(usernameLogin: string, passwordLogin: string): void {
    alert(this.registerService.loginUser(usernameLogin, passwordLogin));
  }

}
