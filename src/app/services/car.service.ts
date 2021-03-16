import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44397/api/cars/getall"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
    }

    getCarsDetails(carId: number): Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + 'cars/getcardetail?carId=' + carId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
  
    getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + 'cars/getcarbycolor?colorId=' + colorId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
  
    getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + 'cars/getcarbybrand?brandId=' + brandId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
  }

