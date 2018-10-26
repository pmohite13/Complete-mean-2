import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IUser } from '../../../shared/interfaces';
import { DataService } from '../../../core/data.service';
import { Router } from '@angular/router';
import { RegisterService } from '../../../core/register.service';
import { ValidationService } from '../../../shared/validation.service';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  public registerFormGroup: FormGroup;
  emailFormControl: FormControl;
  user: IUser;


  constructor(private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router) {
    this.buildFormGroup();
  }

  ngOnInit() {
  }

  // private buildFormGroup() {
  //   this.registerFormGroup = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, ValidationService.emailValidator]],
  //     phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), ValidationService.phoneNumberValidator]],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required]
  //   }, { validator: this.checkPasswords });
  // }

  private buildFormGroup() {
    debugger;
    this.registerFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), ValidationService.phoneNumberValidator]],
      passwords: this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: this.checkPasswords })
    }
    );
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    debugger;
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return ((pass === confirmPass) ? null : { notSame: true });
  }

  public registerUser() {
    debugger;
    this.user = this.registerFormGroup.value;
    this.registerService.registerUser(this.user)
      .subscribe((token: string) => {
        debugger;
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigate(['/']);
        }
        else {
          // this.errorMessage = 'Unable to add customer';
        }
      },
        (err) => console.log(err));
  }

}
