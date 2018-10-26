import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../../core/register.service';
import { IUser, IAuthResponse, IVolunteer } from '../../../shared/interfaces';
import { MatIcon } from '@angular/material';
import { DataService } from '../../../core/data.service';
import { ValidationService } from '../../../shared/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  entityId: number;
  public loginFormGroup: FormGroup;
  user: IUser;

  @ViewChild(MatIcon) visibilityIcon: MatIcon;
  @ViewChild(MatIcon) visibilityIconOff: MatIcon;
  showPassword: boolean = true;
  volunteer: IVolunteer;
  errorMessage: string = null;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private dataService: DataService,
    private validationService: ValidationService,
    private router: Router) {
    this.buildFormGroup();
  }

  ngOnInit() {
    debugger;
    this.route.queryParams.subscribe(params => {
      debugger;
      this.entityId = Number(params['entityId']) || 0;
    });
  }

  private buildFormGroup() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }



  public togglePassword(toggle: boolean) {
    debugger;
    this.showPassword = !toggle;
  }

  public loginUser() {
    debugger;
    this.user = this.loginFormGroup.value;
    this.registerService.loginUser(this.user)
      .subscribe((authResponse: IAuthResponse) => {
        debugger;
        if (authResponse.auth) {
          localStorage.setItem('token', authResponse.token);
          if (this.entityId === 1) {// its volunteer
            let token = localStorage.getItem('token');
            this.dataService.getVolunteerByUser(this.user.email)
              .subscribe((volunteer: IVolunteer) => {
                debugger;
                this.volunteer = volunteer[0];
                if (this.volunteer) {
                  this.router.navigate(['shell/volunteerProfile']);
                }
                else {
                  this.router.navigate(['shell/newVolunteer', '0']);
                }
              },
                (err) => console.log(err));
          }
          if (this.entityId === 2) {// its organization
            this.router.navigate(['shell/organization']);
          }
        }
        else {
          // this.errorMessage = 'Unable to add customer';
        }
      },
        (err) => {
          debugger;
          this.errorMessage = 'Wrong credential. Try again or click Forgot password to reset it.';
          // if (err.status === 401) {
          //   this.errorMessage = 'Wrong credential. Try again or click Forgot password to reset it.';
          // }
        });
  }

}
