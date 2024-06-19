import { Injectable } from '@angular/core';
import { ListResponseModule } from '../modules/listResponseModule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../modules/car';
import { ResponseModule } from '../modules/responseModule';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7245/api/cars/getall';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModule<Car>> {
    return this.httpClient.get<ListResponseModule<Car>>(this.apiUrl);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModule>{
    return this.httpClient.post<ResponseModule>(this.apiUrl+"cars/add",car)
  }
}
