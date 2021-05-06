import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackbarServiceService } from '../snackbar-service.service';
import { MyErrorStateMatcher } from './myClass';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {
  addregistrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private snackBar: SnackbarServiceService) { }

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.addregistrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile_number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      address: [''],
      city: [''],
      state: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSumbit() {
    this.snackBar.showSnackBar('Registration submitted successfully', '', 'success');
  }
  cancelbtn(){
    this.addregistrationForm.reset();
  }
}
