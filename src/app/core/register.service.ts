import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse, IProject, ICity, IUser, IAuthResponse } from '../shared/interfaces';

@Injectable()
export class RegisterService {

    baseRegisterUrl: string = '/api/auth/register';
    baseLoginUrl: string = '/api/auth/login';

    constructor(private http: HttpClient) {

    }

    registerUser(user: IUser): Observable<string> {
        return this.http.post<string>(this.baseRegisterUrl, user)
            .pipe(
                map((token) => {
                    console.log('registration success: ');
                    return token;
                }),
                catchError(this.handleError)
            );
    }

    loginUser(user: IUser): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(this.baseLoginUrl, user)
            .pipe(
                map((authResponse) => {
                    console.log('registration success: ');
                    return authResponse;
                }),
                catchError(this.handleError)
            );
    }



    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
