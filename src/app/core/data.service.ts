import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IState, IPagedResults, ICustomerResponse, IProject, ICity, IWorkArea, IQualification, IVolunteer, IVolunteerResponse, IUser } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = '/api/customers';
    baseProjectsUrl: string = '/api/projects';
    baseStatesUrl: string = '/api/states';
    baseCitiesUrl: string = '/api/cities';
    baseWorkAreaUrl: string = '/api/workAreas';
    baseQualificationUrl: string = '/api/qualifications';
    baseVolunteerUrl: string = '/api/volunteers';
    baseUserUrl: string = 'api/auth/user';

    constructor(private http: HttpClient) {

    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl)
            .pipe(
                map((customers: ICustomer[]) => {
                    this.calculateCustomersOrderTotal(customers);
                    return customers;
                }),
                catchError(this.handleError)
            );
    }

    getProjects(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.baseUrl)
            .pipe(
                map((projects: IProject[]) => {
                    //this.calculateCustomersOrderTotal(projects);
                    return projects;
                }),
                catchError(this.handleError)
            );
    }

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                map((res) => {
                    //Need to observe response in order to get to this header (see {observe: 'response'} above)
                    const totalRecords = +res.headers.get('x-inlinecount');
                    let customers = res.body as ICustomer[];
                    this.calculateCustomersOrderTotal(customers);
                    return {
                        results: customers,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }

    getProjectsPage(page: number, pageSize: number): Observable<IPagedResults<IProject[]>> {
        return this.http.get<IProject[]>(`${this.baseProjectsUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                map((res) => {
                    //Need to observe response in order to get to this header (see {observe: 'response'} above)
                    const totalRecords = +res.headers.get('x-inlinecount');
                    let projects = res.body as IProject[];
                    //this.calculateCustomersOrderTotal(projects);
                    return {
                        results: projects,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }

    getCustomer(id: string): Observable<ICustomer> {
        return this.http.get<ICustomer>(this.baseUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    getVolunteerByUser(user: string): Observable<IVolunteer> {
        debugger;
        return this.http.get<IVolunteer>(this.baseVolunteerUrl + '/' + user)
            .pipe(
                catchError(this.handleError)
            );
    }

    getUser(token: string): Observable<IUser> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('x-access-token', token);

        return this.http.get<IUser>(this.baseUserUrl, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post<ICustomerResponse>(this.baseUrl, customer)
            .pipe(
                map((data) => {
                    console.log('insertCustomer status: ' + data.status);
                    return data.customer;
                }),
                catchError(this.handleError)
            );
    }

    insertVolunteer(volunteer: IVolunteer): Observable<IVolunteer> {
        return this.http.post<IVolunteerResponse>(this.baseVolunteerUrl, volunteer)
            .pipe(
                map((data) => {
                    console.log('insertVolunteer status: ' + data.status);
                    return data.volunteer;
                }),
                catchError(this.handleError)
            );
    }



    updateCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.put<ICustomerResponse>(this.baseUrl + '/' + customer._id, customer)
            .pipe(
                map((data) => {
                    console.log('updateCustomer status: ' + data.status);
                    return data.customer;
                }),
                catchError(this.handleError)
            );
    }


    updateVolunteer(volunteer: IVolunteer): Observable<IVolunteer> {
        return this.http.put<IVolunteerResponse>(this.baseVolunteerUrl + '/' + volunteer._id, volunteer)
            .pipe(
                map((data) => {
                    console.log('updateVolunteer status: ' + data.status);
                    return data.volunteer;
                }),
                catchError(this.handleError)
            );
    }

    deleteCustomer(id: string): Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    getWorkAreas(): Observable<IWorkArea[]> {
        return this.http.get<IWorkArea[]>(this.baseWorkAreaUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(this.baseStatesUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    getCitiesForState(stateId: number): Observable<ICity[]> {
        return this.http.get<ICity[]>(this.baseCitiesUrl + '/' + stateId)
            .pipe(
                catchError(this.handleError)
            );
    }

    getQualifications(): Observable<IQualification[]> {
        return this.http.get<IQualification[]>(this.baseQualificationUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
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
