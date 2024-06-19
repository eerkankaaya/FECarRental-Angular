import { Injectable } from '@angular/core';
import { ListResponseModule } from '../modules/listResponseModule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../modules/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:7245/api/colors/getall';

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModule<Customer>> {
    return this.httpClient.get<ListResponseModule<Customer>>(this.apiUrl);
  }
}
