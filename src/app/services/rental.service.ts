import { Injectable } from '@angular/core';
import { ListResponseModule } from '../modules/listResponseModule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rental } from '../modules/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:7245/api/colors/getall';

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModule<Rental>> {
    return this.httpClient.get<ListResponseModule<Rental>>(this.apiUrl);
  }
}
