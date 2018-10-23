import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../../core/register.service';
import { IUser, IAuthResponse } from '../../../shared/interfaces';
import { MatIcon } from '@angular/material';

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

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
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
      password: ['', Validators.required]
    });
  }

  public togglePassword(toggle: boolean) {
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
            this.router.navigate(['shell/newVolunteer']);
          }
          if (this.entityId === 2) {// its volunteer
            this.router.navigate(['shell/organization']);
          }
        }
        else {
          // this.errorMessage = 'Unable to add customer';
        }
      },
        (err) => console.log(err));
  }

}
