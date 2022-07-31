import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../interfaces/customer';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Bearer: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getCustomers(): Observable<Customer>{
    return this.http.get<Customer>(environment.baseBackendUrl+"/getCUstomers");
  }


  addCustomer(customer : Customer) : Observable<Customer>{
    return this.http.post<Customer>(environment.baseBackendUrl+"addCUstomer", customer , httpOptions);
  }

  updateCustomer(customer : Customer) : Observable<Customer>{
    return this.http.put<Customer>(environment.baseBackendUrl+"updateCustomer",customer,httpOptions);
  }

  
  deleteCustomer(customerId : string) : Observable<Customer>{
    return this.http.delete<Customer>(environment.baseBackendUrl+"updateCustomer/{"+customerId+"}");
  }
}
