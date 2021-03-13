import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  apiUrl="https://localhost:44397/api/cars/getall"
  constructor(private carService : CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }
}
