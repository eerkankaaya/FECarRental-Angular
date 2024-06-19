import { Injectable } from '@angular/core';
import { ListResponseModule } from '../modules/listResponseModule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../modules/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:7245/api/colors/getall';

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModule<Brand>> {
    return this.httpClient.get<ListResponseModule<Brand>>(this.apiUrl);
  }
}
