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
    this.add();
    // console.log(this.user.username);
    // this.add(this.user.username, this.user.email, this.user.phone, this.user.password);
    this.inputForm.reset();
    
  }

  getUsers(): void {
    this.registerService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(): void {
  //   this.user.username = this.inputForm.value.username;    
  //   this.user.email = this.inputForm.value.email;    
  //   this.user.phone = this.inputForm.value.phoneNumber;
  //   if(this.inputForm.value.password == this.inputForm.value.passwordConfirm) {
  //     this.user.password = this.inputForm.value.password;
  //   }
    // this.user.username.trim();
    // this.user.email.trim();
    // this.user.phone.trim();
    // this.user.password.trim();
    // if(!this.user) {return;}
    let name = "Arastoo";
    console.log("Arastoooooooo");
    console.log(this.user.email);
    this.registerService.addUser(this.user.username)
      .subscribe(user => {
        this.users.push(this.user)
      });
    // this.printUser();
  }

  printUser() {
    // for(let i = 0; i < this.users.length; i++) {
    //   console.log('{' + JSON.stringify(this.users[i].username) + '},\n{' + JSON.stringify(this.users[i].email) + '},\n{' + JSON.stringify(this.users[i].phone) + '}');
    // }
    for(let i = 0; i < this.users.length; i++) {
      console.log('{' + JSON.stringify(this.users[i].username) + '}');
    }
  }

}
