import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  // constructor() { }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.inputForm);
  }

}
