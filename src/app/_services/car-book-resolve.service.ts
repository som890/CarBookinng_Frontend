import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from '../_model/car.model';
import { CarService } from './car.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class CarBookResolveService implements Resolve<Car[]>{

  constructor(private carService: CarService, 
    private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Car[] | Observable<Car[]> | Promise<Car[]> {
    const id = route.paramMap.get("id");
      const isSingleCarCheckOut = route.paramMap.get("isSingleCarCheckOut");

      return this.carService.getCarDetails(isSingleCarCheckOut, id)
      .pipe(
        map((x: Car[],i) => x.map((car: Car) => this.imageProcessingService.createImages(car)))
      )
  }
}
