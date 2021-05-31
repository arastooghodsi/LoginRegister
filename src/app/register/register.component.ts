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
    name: '',
    family: '',
    email: '',
    phone: '',
    password: '',
    group: ''
  };
  form: any;


   constructor() { }

  onSubmit(form: NgForm) {
    this.inputForm.setValue({
      
    });
    console.log(this.form);
    // this.user.phone = this.form.;
    // console.log(this.user.phone);
    // alert(this.user.phoneNumber);
    // alert(this.inputForm);
  }

}
