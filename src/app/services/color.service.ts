import { Injectable } from '@angular/core';
import { ListResponseModule } from '../modules/listResponseModule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Color } from '../modules/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:7245/api/colors/getall';

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModule<Color>> {
    return this.httpClient.get<ListResponseModule<Color>>(this.apiUrl);
  }
}
