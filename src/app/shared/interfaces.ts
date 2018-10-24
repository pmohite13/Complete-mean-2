import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}

export interface IVolunteer {
    _id?: string;
    prefix: number;
    dateOfBirth: Date;
    gender: number;
    workAreas: IWorkArea[];
    qualification: IQualification;
    qualificationId: number;
    city: ICity;
    cityId: number;
    state?: IState;
    stateId?: number;
    pincode: number;
    address1: string;
    address2: string;
    user: IUser
}

export interface IProject {
    _id?: string;
    projectName: string;
    projectDescription: string;
}

export interface IUser {
    _id?: string;
    firstName?: string;
    lastName: string;
    email: string;
    phone: number;
    //password: string;
}

export interface IState {
    id: number;
    abbreviation: string;
    name: string;
}

export interface IWorkArea {
    id: number;
    name: string;
}

export interface IQualification {
    id: number;
    name: string;
}

export interface ICity {
    id: number;
    abbreviation: string;
    name: string;
    state: IState,
    stateId: string
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ICustomerResponse {
    customer: ICustomer;
    status: boolean;
    error: string;
}

export interface IVolunteerResponse {
    volunteer: IVolunteer;
    status: boolean;
    error: string;
}


export interface IAuthResponse {
    token: string;
    auth: boolean;
    error: string;
}